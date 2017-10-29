import React from 'react';
import MDReader from '../../components/md-reader';
require('./style.scss');

export default class Tutorial extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.setState({
            docsRoot: 'https://raw.githubusercontent.com/bilo-io',
            tutId: '',
            url: ''
        }, () => this.getTutorialUrl());
        this.logUrlParams('componentWillMount');
    }

    logUrlParams(func) {
        this.state && console.log(func, `${this.state.docsRoot}/${this.getTutorialId()}`);
    }
    getTutorialUrl() {
        let tutId = this.props.match.params.tutorialId;
        let url = `${this.state.docsRoot}/${tutId}/master/README.md`;
        this.setState({
            ...this.state,
            tutId,
            tutUrl: url
        })
        let {state} = this;
        console.log({state});
        return encodeURI(url);
    }
    render() {
        return this.state
            ? <MDReader url={this.state.tutUrl}/>
            : null;
    }
}