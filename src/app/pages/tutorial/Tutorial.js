import React from 'react';
var axios = require('axios');

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
                this.setState(Object.assign(this.state, {
                    markdown: response.data
                }))
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
        console.log({url});
        return encodeURI(url);
    }
    render() {
        return (
            <div>
                <h1>Tutorial Entry</h1>
                {this.renderMarkdown()}
            </div>
        )
    }
    renderMarkdown() {
        if (this.state && this.state.html) {
            return (
                <div dangerouslySetInnerHTML={{ __html: this.state.html }}>
                </div>
            )
        }
    }
    convertMarkdown(markdown) {
        this.outHtml = markdown;
        this.setState(Object.assign(this.state, {
            html: this.state.markdown
        }));
    }
}