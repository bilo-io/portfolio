import React from 'react';
require('./tutorials.scss');
var axios = require('axios');
var readme = require('../../../../README.md');
var showdownHighlight = require('showdown-highlight');
// Markdown with Showdown:
// var showdown = require('showdown'),
//     converter = new showdown.Converter({
//         extensions: [showdownHighlight]
//     }),
//     text = `
// #hello, markdown!
// ##How are you?`;
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
        overview: 'https://raw.githubusercontent.com/bilo-io/tutorials/blob/master/Posts/Angular/README.md',
        tutorials: [
            'https://raw.githubusercontent.com/bilo-io/tutorials/master/Posts/Angular/101%20-%20Getting%20Started/README.md',
            'https://raw.githubusercontent.com/bilo-io/tutorials/master/Posts/Angular/102%20-%20Application%20Architecture/README.md',
            'https://raw.githubusercontent.com/bilo-io/tutorials/master/Posts/Angular/103%20-%20An%20Example%20App/README.md'
        ]
    },
    fed: {
        logo: 'https://res.cloudinary.com/rapidweavercommunity/image/upload/s--38Ry9gwM--/c_fill,h_200,q_jpegmini,w_200/v1470026154/addons/icons/423554435.png',
        overview: 'raw.githubusercontent.com/bilo-io/tutorials/master/Posts/FED/README.md',
        tutorials: [
            'https://raw.githubusercontent.com/bilo-io/tutorials/master/Posts/FED/101%20-%20Project%20Structure/README.md',
            'https://raw.githubusercontent.com/bilo-io/tutorials/master/Posts/FED/102%20-%20Webpack%20integration/README.md'
        ]
    },
    react: {
        logo: 'http://www.jeremyzerr.com/sites/default/files/styles/large/public/field/image/react-logo-300-transparent.png',
        tutorials: [
            'https://raw.githubusercontent.com/bilo-io/tutorials/master/Posts/React/101%20-%20Getting%20Started/README.md',
            'https://raw.githubusercontent.com/bilo-io/tutorials/master/Posts/React/102%20-%20Project%20Structure/README.md',
            'https://raw.githubusercontent.com/bilo-io/tutorials/master/Posts/React/103%20-%20An%20Example%20App/README.md'
        ]
    },
    sass: {
        logo: 'http://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png',
        tutorials: [

        ]
    }

}
export default class Tutorials extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.outHtml = outHtml;
        this.setState({
            tutorials: tutorials,
            categories: [
                'fed',
                'react',
                'angular2',
            ],
            posts: []
        });
        this.getMarkdown();
        console.log(this);
    }
    render() {
        return (
            <div>
                {this.state && this.state.categories && this.state.categories.map((category, index) => {
                    return (
                        <div className='posts-category'>
                            <h1>{category}</h1>
                            <div className='posts-container'>
                                {this.state && this.state.posts && this.state.posts.map((post, index) => {
                                    if (post.category === category) {
                                        return (
                                            <div key={post.title} className='post-card' onClick={this.selectPost.bind(this, index)}>
                                                <img src={post.logo} />
                                                <div>{post.title}</div>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </div>
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

        // this.outHtml = converter.makeHtml(post.data);
        this.outHtml = post.data;
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
    getMarkdown() {
        let keys = Object.keys(tutorials);
        keys.forEach((key) => {
            tutorials[key].tutorials.forEach((url) => {
                let urlArray = url.split('/');
                let id = `${decodeURI(urlArray[urlArray.length - 2])}`;

                axios.get(url)
                    .then((response) => {
                        let posts = [];
                        this.state.posts.forEach((post) => {
                            posts.push(post)
                        });
                        posts.push({
                            title: id,
                            category: key,
                            data: response.data,
                            logo: tutorials[key].logo
                        });
                        posts.sort((a, b) => {
                            if (a.category < b.category) { return -1 }
                            if (a.category > b.category) { return 1; }
                            return 0;
                        })

                        this.setState(Object.assign(this.state, {
                            posts: posts
                        }));
                        console.log(this.state);
                    })
                    .catch((error) => {
                        console.error({ error });
                    });
            });
        })
    }
}