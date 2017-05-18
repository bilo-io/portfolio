import React from 'react';
require('./tutorials.scss');
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

    componentWillMount() {
        this.outHtml = outHtml;
        this.initState();
    }

    initState() {
        this.setState(Object.assign({}, {
            tutorials: tutorials,
            data: {
                angular2: [
                ],
                fed: [
                ],
                react: [
                ]
            }
        }));
        this.getMarkdown();
    }

    render() {
        return (
            <div>
                <h1>Tutorials</h1>
                {this.tutorialSections()}
                {this.testSection()}
                <div dangerouslySetInnerHTML={this.getHtml()}></div>
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
                        this.setState(Object.assign(this.state, {
                            data: Object.assign(this.state.data, {
                                [key]: [...data[key],{
                                    name: id,
                                    markdown: response.data
                                }]
                            })
                        }));
                        console.log(this.state);
                    })
                    .catch((error) => {
                        console.error({ error });
                    });
            });
        })
    }

    tutorialSections() {
        let keys = Object.keys(this.state.data);
        let tuts = this.state.data;
        console.log(this.state);

        keys.forEach( (key) => {
            this.state.data[key].map( (tut) => {
                console.log(tut);
                return <div className='tut-card'>{tut.name}</div>
            })
        })
    }

    testSection() {
        let tuts = [ 'Help', 'I need to ', 'Write ReactCode'];
            tuts.map( (tut) => {
                console.log(tut);
                return <div className='tut-card'>{tut}</div>
        })
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