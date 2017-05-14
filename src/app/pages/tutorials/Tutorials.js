import React from 'react';
var axios = require('axios');
var readme = require('../../../../README.md');
var showdownHighlight = require('showdown-highlight');
// Markdown with Showdown:
var showdown = require('showdown'),
    converter = new showdown.Converter({
        extensions: [showdownHighlight]
    }),
    text = `
#hello, markdown!
##How are you?`,
    outHtml = converter.makeHtml(readme);
// Markdown with Marked & Highlight:
// import marked, { Renderer } from 'marked';
// import hljs from 'highlight';
// const renderer = new Renderer();
// renderer.code = (code, language) => {
//     const validLang = !!(language && hljs.getLanguage(language));;
//     const highlighted = validLang ? hljs.highlight(language, code).value : code;
//     return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
// }
// marked.setOptions({ renderer });

export default class Tutorials extends React.Component {
    constructor(props) {
        super(props);
        this.getMarkdown();
    }

    componentWillMount() {
        this.outHtml = outHtml;
        console.log(this);
    }

    getMarkdown() {
        let tutUrl = 'https://github.com/bilo-io/tutorials/blob/master/Posts/React/1%20-%20Getting%20Started/_Article.md';
        axios.get(tutUrl)
            .then((response) => {
                console.log(response);
                text = response;
            }).catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div >
            
                <br />
                <div dangerouslySetInnerHTML={this.getHtml()}></div>
            </div>    
        )
    }

    getHtml() {
        // Showdown
        return {
            __html: this.outHtml
        }
        // // Marked
        // let val = marked(readme);
        // console.log(val);
        // return val;
    }
}