import React from 'react';
// var readme = require('../../../../README.md');
var showdown  = require('showdown'),
    converter = new showdown.Converter(),
    text = `
#hello, markdown!
    
##How are you?`,
    outHtml = converter.makeHtml(text);
    
export default class Tutorials extends React.Component {
    constructor(props) {
        super(props);
        console.log(outHtml);
    }

    componentWillMount() {
        this.outHtml = outHtml;
        console.log(this);
    }

    render() {
        return (
            <div>
                <br />
                <br />
                <br />
                <br />
                <div dangerouslySetInnerHTML={this.getHtml()}></div>
            </div>    
        )
    }

    getHtml() {
        return {__html: this.outHtml}
    }
}