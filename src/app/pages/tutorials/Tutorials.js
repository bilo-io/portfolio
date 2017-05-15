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
##How are you?`;
var outHtml = '';
    // outHtml = converter.makeHtml(readme);
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
        this.setState({
            tutorials: tutorials,
            posts: []
        });
        this.getMarkdown();
        console.log(this);
    }

    getMarkdown() {
        let keys = Object.keys(tutorials);
        keys.forEach((key) => {
            tutorials[key].tutorials.forEach((url) => {
                let urlArray = url.split('/');
                let id = `${key.toUpperCase()}: ${decodeURI(urlArray[urlArray.length - 2])}`;
                axios.get(url)
                    .then((response) => {
                        let posts = this.state.posts;
                        posts.push({
                            title: id,
                            data: response.data,
                            logo: tutorials[key].logo
                        });
                        this.setState(Object.assign(this.state, {
                            posts: posts
                        }));
                    })
                    .catch((error) => {
                        console.error({ error });
                    });
            });
        })
    }

    render() {
        return (
            <div className='posts-container'>
                {this.state && this.state.posts && this.state.posts.map((post, index) => {
                    return (
                        <span key={post.title} className='post-card' onClick={this.selectPost.bind(this, index)}>
                            <label>{post.title}</label>
                        </span>
                    )
                })}
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

    selectPost(index) {
        console.log(index);
        let post = this.state.posts[index];
        
        this.outHtml = converter.makeHtml(post.data);
        this.setState(Object.assign(this.state, {
            html: this.outHtml
        }));
        
    }    
    getHtml() {
        // Showdown
        return {
            __html: this.state.html
        }
        // // Marked
        // let val = marked(readme);
        // console.log(val);
        // return val;
    }
}