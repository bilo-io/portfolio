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
    componentDidMount() {
        this.fetchMarkdown(this.props.url)
    }
    componentWillReceiveProps(nextProps) {
        console.log({nextProps});
        this.fetchMarkdown(nextProps.url);
    }
    fetchMarkdown(url) {
        if (!url) {
            console.warn('no url specified!: ', url)
            return;
        }
        console.log('fetching Markdown: ', this.props.url);
        axios
            .get(url)
            .then((response) => {
                this.convertMarkdown(response.data);
            })
    }
    convertMarkdown(markdown) {
        this.setState({
            ...this.state,
            html: marked(markdown)
        });
    }
    render() {
        return this.state
            ? (
                <div className='markdown-wrapper'>
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
}