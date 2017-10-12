import React, { Component, PropTypes } from 'react';
import { Search } from 'bilo-ui';
import './style.scss';
import FuzzySearch from 'fuzzy-search';
import responses from './responses';
import Highlighter from 'react-highlight-words';
import { generateWordCloud } from './generate';
import WordCloud from 'react-d3-cloud';

const fontSizeMapper = word => Math.log2(word.value) * 5;
const rotate = word => 0;

export default class WordCloudPage extends Component {
    constructor(props) {
        super(props)
        this.search = this.search.bind(this);
        this.select = this.select.bind(this);
    }
    componentDidMount() {
        this.responsesToWordcloud();
        this.searcher = new FuzzySearch(responses, ['text', 'tagline'], {
            caseSensitive: false,
        });

        this.setState({
            query: '',
            suggestions: [],
            searchResults: []
        })
    }
    responsesToWordcloud(minMentions = 2, scale = 100) {
        let responseStrings =  responses.map( (r) => {
            return r.text
        })
        
        let words = generateWordCloud(responseStrings);
        let wordCloudData = []
        for( var key in words) {
            if(words[key] >= minMentions) {
            wordCloudData.push( { text: key, value: words[key] * scale})
            }
        }
        this.setState({
            ...this.state,
            wordcloud: wordCloudData
        })
    }
    render() {
        return this.state ? (
            <div className='page page-padded'>
                <h1>Word Cloud</h1>
                <Search
                    tag='wordcloud'
                    placeholder='search responses...'
                    search={this.search}
                    select={this.select}
                    suggestions={this.state.suggestions}
                    suggestionsOn={false}
                />

                <Suggestions
                    highlight={this.state.query}
                    onSelect={this.select}
                    suggestions={this.state.searchResults} />

                {
                    this.state.wordcloud ? (
                        <div style={{width: '100%', height: '10em'}}>
                            <WordCloud  
                                data={this.state.wordcloud}
                                fontSizeMapper={fontSizeMapper}
                                rotate={rotate}
                            />
                        </div>
                    ): null
                }
            </div>
        ) : null
    }
    select(tag, item) {
        console.log('Selected:', { item })
    }
    search(tag, query) {
        if (!query || !query.length) {
            this.setState({
                ...this.state,
                query,
                suggestions: [],
                searchResults: []
            })
            return;
        }

        let searchResult = this.searcher.search(query);
        let results = searchResult.map((item) => {
            return {
                label: `${item.person}: "${item.text}"`
            }
        })
        this.setState({
            ...this.state,
            query,
            suggestions: results,
            searchResults: searchResult
        })
        console.log(searchResult)
    }
}

export const Suggestions = (props, {highlight}) => {
    return (
        <div>
            {
            (props.suggestions || []).map((response, index) => {
                let { person } = response;
                return (
                    <div key={index} className='response-card' onClick={() => {props.onSelect('something', response), console.log({query})}}>
                        <label>
                            <Highlighter highlightClassName='highlighting' searchWords={[props.highlight]} textToHighlight={`${person.firstName} ${response.person.lastName}`} />
                        </label>
                        <p style={{ fontStyle: 'italic' }}>
                            <Highlighter highlightClassName='highlighting' searchWords={[props.highlight]} textToHighlight={response.text} />
                        </p>
                        <p style={{ color: '#999999' }}>
                            ~tagline: <Highlighter highlightClassName='highlighting' searchWords={[props.highlight]} textToHighlight={response.tagline} />
                        </p>
                    </div>
                )
            })
        }</div>
    )
}