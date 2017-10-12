import React, { Component, PropTypes } from 'react';
import { Search } from 'bilo-ui';
import './style.scss';
import FuzzySearch from 'fuzzy-search';
import responses from './responses';
import Highlighter from 'react-highlight-words';
import { generateWordCloud } from './generate';

export default class WordCloud extends Component {
    constructor(props) {
        super(props)
        this.search = this.search.bind(this);
        this.select = this.select.bind(this);
        this.responsesToWordcloud();
    }
    componentDidMount() {
        this.searcher = new FuzzySearch(responses, ['text', 'tagline'], {
            caseSensitive: false,
        });

        this.setState({
            query: '',
            suggestions: [],
            searchResults: []
        })
    }
    responsesToWordcloud() {
        let responseStrings =  responses.map( (r) => {
            return r.text
        })
        
        let words = generateWordCloud(responseStrings);
        let wordCloudData = []
        for( var key in words) {
            wourdCloudData.push( { text: key, value: words[key]})
        }
        console.log({wordCloudData});
    }
    render() {
        return this.state ? (
            <div className='page page-padded'>
                <h1>Word Cloud</h1>
                <div></div>
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
                return (
                    <div key={index} className='response-card' onClick={() => {props.onSelect('something', response), console.log({query})}}>
                        <label>
                            <Highlighter highlightClassName='highlighting' searchWords={[props.highlight]} textToHighlight={response.person} />
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