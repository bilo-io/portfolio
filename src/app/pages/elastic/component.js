import React from 'react';
import { Search } from 'bilo-ui';
import axios from 'axios';
export class Elastic extends React.Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        this.state = {
            query: ''
        }
    }
    render() {
        return (
            <div className='page page-padded'>
                <h1>Elastic</h1>
                <Search tag='elastic' search={this.searchElastic}/>
            </div>
        )
    }
    searchElastic(tag, q) {
        console.log('Searching elastic: ', q);
        axios({
            method: 'GET',

            url: 'http://localhost:3000'
        })
    }
}

export default Elastic;