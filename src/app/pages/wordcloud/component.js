import React, { Component, PropTypes } from 'react';
import { Search } from 'bilo-ui';
import './style.scss';
import FuzzySearch from 'fuzzy-search';
import responses from './responses';

export default class WordCloud extends Component {
    constructor(props) {
        super(props)
        this.search = this.search.bind(this);
        this.select = this.select.bind(this);
    }
    componentDidMount() {
        this.searcher = new FuzzySearch(responses, ['text', 'tagline', 'person'], {
            caseSensitive: false,
        });

        this.setState({
            query: '',
            suggestions: [],
            searchResults: []
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
                    onSelect={this.select}
                    suggestions={this.state.searchResults} />

            </div>
        ) : null
    }
    select(tag, item) {
        console.log('Selected:', { item })
    }
    search(tag, query) {
        if(!query || !query.length) {
            this.setState({
                ...this.state,
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
            suggestions: results,
            searchResults: searchResult
        })
        console.log(searchResult)
    }
}

export const Suggestions = (props) => {
    return (
        <div>{
            (props.suggestions || []).map((response, index) => {
                return (
                    <div key={index} className='response-card' onClick={ () => props.onSelect('something', response)}>
                        <label><b>{response.person}</b></label>
                        <p style={{fontStyle: 'italic'}}><span>"{response.text}"</span></p>
                        <p style={{color: '#999999'}}>~tagline: {response.tagline}</p>
                    </div>
                )
            })
        }</div>
    )
}