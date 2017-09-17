import React from 'react';
require('./style.scss');
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
        return highlight
            .highlightAuto(code)
            .value;
    }
})

export default class Tutorial extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.setState({docsRoot: 'https://raw.githubusercontent.com/bilo-io'});
        this.logUrlParams('componentWillMount');
    }
    componentDidMount() {
        let url = this.getTutorialUrl();
        axios
            .get(url)
            .then((response) => {
                this.getMarkdownHeadings(response.data);
                this.convertMarkdown(response.data);
            })
    }

    logUrlParams(func) {
        this.state && console.log(func, `${this.state.docsRoot}/${this.getTutorialId()}`);
    }
    getTutorialUrl() {
        let tutId = this.props.match.params.tutorialId;
        let url = `${this.state.docsRoot}/${tutId}/master/README.md`;
        console.log({url});
        return encodeURI(url);
    }
    render() {
        return this.state
            ? (
                <div style={{display: 'flex'}}>
                    <div className='markdown-nav'>
                        {(this.state.headings || []).map((heading) => {
                            return <div key={heading}>{heading}</div>
                        })}
                    </div>
                    <div className='markdown-container'>
                        <div>
                            {this.state.html
                                ? <div
                                        className='markdown'
                                        dangerouslySetInnerHTML={{
                                        __html: this.state.html
                                    }}></div>
                                : null}
                        </div>
                    </div>
                </div>
            )
            : null;
    }
    convertMarkdown(markdown) {
        this.setState(Object.assign(this.state, {html: marked(markdown)}));
    }
    getMarkdownHeadings(markdown) {
        let lines = markdown
            .split('\n')
            .filter(line => line.substr(0, 1) === '#');
        console.log({lines});
        this.setState({
            ...this.state,
            lines,
            headings: lines.map(line => line.substr(2, line.length))
        }, () => console.log(this.state))

    }
}