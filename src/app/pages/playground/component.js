import React from 'react';
import { Search } from 'bilo-ui';
import './style.scss';
import FuzzySearch from 'fuzzy-search';

const people = [{
    name: {
        firstName: 'Bilo',
        lastName: 'Lwabona',
    },
    state: 'TZ',
}, {
    name: {
        firstName: 'Mario',
        lastName: 'Kowarz',
    },
    state: 'AU',
}, {
    name: {
        firstName: 'Tyler',
        lastName: 'Clark',
    },
    state: 'RSA',
}, {
    name: {
        firstName: 'Anton',
        lastName: 'Noll',
    },
    state: 'NAM',
}];

const searcher = new FuzzySearch(people, ['name.firstName', 'state'], {
    caseSensitive: false,
});

export default class Playground extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.search = this.search.bind(this);
        this.select = this.select.bind(this);
        this.setState({
            search: {
                query: '',
                suggestions: []
            }
        })
    }
    render() {
        return this.state ? (
            <div className='page'>
                <Search
                    tag={'fuzzy'}
                    placeholder='fuzzy-search...'
                    search={this.search}
                    select={this.select}
                    suggestions={this.state.search.suggestions}
                    suggestionsOn={true}
                />
            </div>
        ) : null
    }
    search(tag, query) {
        let result = searcher.search(query);
        let results = result.map((item) => {
            return {
                label: item.name.firstName + ' ' + item.name.lastName + ', ' + item.state
            }
        });
        this.setState({
            ...this.state,
            search: {
                ...this.state.search,
                suggestions: results
            }
        }, () => console.log(`q: '${query}'`, this.state.search.suggestions));
    }
    select(tag, item) {
        this.setState({
            ...this.state,
            search: {
                query: '',
                selection: item,
                suggestions: []
            }
        }, () => console.log(this.state.search))
    }
}