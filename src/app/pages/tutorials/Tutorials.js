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
var tutorials = {
    react: [
        'https://raw.githubusercontent.com/bilo-io/tutorials/master/Posts/React/1%20-%20Getting%20Started/_Article.md',
    ],
    angular2: [
        'https://raw.githubusercontent.com/bilo-io/tutorials/master/Posts/Angular/1%20-%20Getting%20Started/_Article.md',
        'https://raw.githubusercontent.com/bilo-io/tutorials/master/Posts/Angular/2%20-%20Application%20Architecture/_Article.md'
    ],
    fed: [
        'https://raw.githubusercontent.com/bilo-io/tutorials/master/Posts/FED/1%20-%20Project%20Structure/_Article.md'
    ]
}
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
        let keys = Object.keys(tutorials);
        keys.forEach((key) => {
            tutorials[key].forEach((url) => {
                let urlArray = url.split('/');
                let id = `${key.toUpperCase()}: ${decodeURI(urlArray[urlArray.length - 2])}`;
                axios.get(url)
                    .then((response) => {
                        console.log(response.data);
                    })
                    .catch((error) => {
                        console.error({ error });
                    });
            });
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