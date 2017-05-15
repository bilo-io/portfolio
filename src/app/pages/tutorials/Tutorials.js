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
    angular2: {
        logo: 'https://angular.io/resources/images/logos/angular/angular.png',
        tutorials: [
            'https://raw.githubusercontent.com/bilo-io/tutorials/master/Posts/Angular/1%20-%20Getting%20Started/_Article.md',
            'https://raw.githubusercontent.com/bilo-io/tutorials/master/Posts/Angular/2%20-%20Application%20Architecture/_Article.md'
        ]
    },
    fed: {
        logo: 'https://res.cloudinary.com/rapidweavercommunity/image/upload/s--38Ry9gwM--/c_fill,h_200,q_jpegmini,w_200/v1470026154/addons/icons/423554435.png',
        tutorials: [
            'https://raw.githubusercontent.com/bilo-io/tutorials/master/Posts/FED/1%20-%20Project%20Structure/_Article.md'
        ]
    },
    react: {
        logo: 'http://www.jeremyzerr.com/sites/default/files/styles/large/public/field/image/react-logo-300-transparent.png',
        tutorials: [
            'https://raw.githubusercontent.com/bilo-io/tutorials/master/Posts/React/1%20-%20Getting%20Started/_Article.md',
        ]
    }
}
export default class Tutorials extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.outHtml = outHtml;
        this.initState();
    }

    initState() {
        this.setState(Object.assign({}, {
            tutorials: tutorials,
            data: [{
                angular2: [
                    {
                        name: '',
                        markdown: ''
                    }
                ]
            }, {
                fed: [
                    {
                        name: '',
                        markdown: ''
                    }
                ]
            }, {
                react: [
                    {
                        name: '',
                        markdown: ''
                    }
                ]
            }

            ]
        }));
        this.getMarkdown();
    }

    render() {
        return (
            <div>
                <h1>Tutorials</h1>
                {this.tutorialSections()}
                {/*<div dangerouslySetInnerHTML={this.getHtml()}></div>*/}
            </div>
        )
    }

    getMarkdown() {
        let keys = Object.keys(tutorials);
        keys.forEach((key) => {
            tutorials[key].tutorials.forEach((url) => {
                let urlArray = url.split('/');
                let id = `${key.toUpperCase()}: ${decodeURI(urlArray[urlArray.length - 2])}`;
                axios.get(url)
                    .then((response) => {
                        let data = this.state.data;
                        console.log(data, data[key]);
                        this.setState(Object.assign(this.state, {
                            data: Object.assign(this.state.data, {
                                [key]: Object.assign(this.state.data[key], {
                                    posts: Object.assign(this.state.data[key].posts, this.state.data[key].posts.push({
                                        name: id,
                                        markdown: response.data
                                    }))
                                })
                            })
                        }));
                    })
                    .catch((error) => {
                        console.error({ error });
                    });
            });
        })
    }

    tutorialSections() {

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