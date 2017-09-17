import React from 'react';
import axios from 'axios';
import Search from '../../components/search';
import List from '../../components/list';
require('./style.scss');

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.googleUrl = `https://maps.googleapis.com/maps/api/geocode/json?`;
        this.searchGoogle = this.searchGoogle.bind(this);
    }
    componentWillMount() {
        this.setState({});
    }
    render() {
        return !this.state 
                ? null
                : (
                <div className='page'>
                    <h1>Home</h1>
                    <Search search={this.searchGoogle}/>
                    <List>
                        {(this.state.results || []).map((result, idx) => {
                            result.address_components = [];
                            return <li
                                key={idx}
                                onClick={(e) => {
                                this.setState(Object.assign({}, this.state, {
                                    googleResult: result,
                                    response: undefined,
                                    results: undefined
                                }))
                            }}>{result.formatted_address}</li>
                        })}
                    </List>
                </div>
            )
    }
    searchGoogle(query) {
        if (query.length == 0) {
            return;
        }
        let url = `${this.googleUrl}address=${query}`;
        console.log({url});
        axios
            .request({method: 'GET', url: url})
            .then((response) => {
                this.setState({
                    ...this.state,
                    response: response.data,
                    results: response.data.results
                }, () => {
                    console.log('Response:', this.state.response);
                })
            })
            .catch((error) => {
                console.log({error});
            })
    }
}