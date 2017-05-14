import React from 'react';
var axios = require('axios');
var readme = require('../../../../README.md');
var showdown = require('showdown'),
    converter = new showdown.Converter(),
    text = `
#hello, markdown!
    
##How are you?`,
    outHtml = converter.makeHtml(readme);

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
        return {
            __html: this.outHtml
        }
    }
}