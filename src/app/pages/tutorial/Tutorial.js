import React from 'react';
require('./tutorial.scss');

var axios = require('axios');
var marked = require('marked');
var highlight = require('highlight.js');
marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight: (code) => {
        return highlight.highlightAuto(code).value;
    }
})

export default class Tutorial extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.setState({
            docsRoot: 'https://raw.githubusercontent.com/bilo-io/tutorials/master/Posts'
        });
        this.logUrlParams('componentWillMount');
    }
    componentDidMount() {
        let url = this.getTutorialUrl();
        axios.get(url)
            .then((response) => {
                this.convertMarkdown(response.data);
            })
    }

    logUrlParams(func) {
        this.state &&
            console.log(func, `${this.state.docsRoot}/${this.getTutorialId()}`);
    }
    getTutorialUrl() {
        let tutId = this.props.match.params.tutorialId;
        let tutCategory = tutId.split('_')[0];
        let tutLesson = tutId.split('_')[1];
        let url = `${this.state.docsRoot}/${tutCategory}/${tutLesson}/README.md`;
        console.log({ url });
        return encodeURI(url);
    }
    render() {
        return (
            <div className='markdown-container'>
                <h1>Tutorial Entry</h1>
                <div>
                    {this.renderMarkdown()}
                </div>
            </div>
        )
    }
    renderMarkdown() {
        if (this.state && this.state.html) {
            return (
                <div className='markdown' dangerouslySetInnerHTML={{ __html: this.state.html }}></div>
            )
        }
    }
    convertMarkdown(markdown) {
        this.setState(Object.assign(this.state, {
            html: marked(markdown)
        }));
    }
}