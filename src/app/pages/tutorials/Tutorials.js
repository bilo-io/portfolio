import React from 'react';
import { Link } from 'react-router-dom';
require('./tutorials.scss');
var axios = require('axios');
var readme = require('../../../../README.md');

var tutorials = {
    Angular: {
        logo: 'https://angular.io/resources/images/logos/angular/angular.png',
        overview: 'https://raw.githubusercontent.com/bilo-io/tutorials/blob/master/Posts/Angular/README.md',
        tutorials: [
            'https://raw.githubusercontent.com/bilo-io/tutorials/master/Posts/Angular/101%20-%20Getting%20Started/README.md',
            'https://raw.githubusercontent.com/bilo-io/tutorials/master/Posts/Angular/102%20-%20Application%20Architecture/README.md',
            'https://raw.githubusercontent.com/bilo-io/tutorials/master/Posts/Angular/103%20-%20An%20Example%20App/README.md'
        ]
    },
    FED: {
        logo: 'https://res.cloudinary.com/rapidweavercommunity/image/upload/s--38Ry9gwM--/c_fill,h_200,q_jpegmini,w_200/v1470026154/addons/icons/423554435.png',
        overview: 'raw.githubusercontent.com/bilo-io/tutorials/master/Posts/FED/README.md',
        tutorials: [
            'https://raw.githubusercontent.com/bilo-io/tutorials/master/Posts/FED/101%20-%20Project%20Structure/README.md',
            'https://raw.githubusercontent.com/bilo-io/tutorials/master/Posts/FED/102%20-%20Webpack%20integration/README.md'
        ]
    },
    React: {
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
        let keys = Object.keys(tutorials);
        let posts = [];
        keys.forEach((key) => {
            tutorials[key].tutorials.forEach((url) => {
                let urlArray = url.split('/');
                let id = `${decodeURI(urlArray[urlArray.length - 2])}`;
                posts.push({
                    title: id,
                    category: key,
                    logo: tutorials[key].logo
                });
                posts.sort((a, b) => {
                    if (a.category < b.category) { return -1 }
                    if (a.category > b.category) { return 1; }
                    return 0;
                })
            })
        })

        this.setState({
            tutorials: tutorials,
            categories: [
                'FED',
                'React',
                'Angular',
            ],
            posts: posts
        });
    }
    render() {
        return (
            <div className="posts">
                {this.state && this.state.categories && this.state.categories.map((category, index) => {
                    return (
                        <div className='posts-category' key={category}>
                            <h1>{category}</h1>
                            <div className='posts-container'>
                                {this.state && this.state.posts && this.state.posts.map((post, index) => {
                                    if (post.category === category) {
                                        return (

                                            <Link className='post-card' key={post.title} to={`/tutorials/${post.category}_${post.title}`}>
                                                <img src={post.logo} />
                                                <div>{post.title}</div>
                                            </Link>

                                        )
                                    }
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}