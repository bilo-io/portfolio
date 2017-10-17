import React from 'react';
import './style.scss';
import Editor from 'draft-js-plugins-editor';
import IssueEditor from './issue/IssueEditor';

export default class Playground extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // this.setState({}, () => {console.log('playground initialised')});
    }
    render() {
        return (
            <div className='page'>
                <IssueEditor />
            </div>
        ) 
    }
}