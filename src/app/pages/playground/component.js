import React from 'react';
import './style.scss';
import Editor from 'draft-js-plugins-editor';
import IssueEditor from './issue/IssueEditor';
import { Search, SearchState } from 'bilo-ui';

export default class Playground extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className='page'>
            </div>
        )
    }
}