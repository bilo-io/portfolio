import React from 'react';
import Highlight from 'react-hljs'
import { Icon } from 'bilo-ui'
import './style.scss'
import jsxToString from 'jsx-to-string'
import reactElementToJSXString from 'react-element-to-jsx-string';
import ReactElementToString from 'react-element-to-string'

class CodeDemo extends React.Component {
    constructor(props) {
        super(props)
        this.snippet = `
        class CodeSnippet {
            constructor(props) {
                this.name = "CodeDemoComponent"
            }
            render() {
                return (
                    <div></div>
                )
            }
        }
        `
    }
    componentWillMount() {
        this.setState({
            isOpen: true
        })
        this.children = this.props.children.toString()
        console.log('props',this.props)
        console.log('refs',this.refs)
        console.log(this.props.toLocaleString())
    }
    componentDidMount() {
        console.log(this.refs)
        console.log(ReactElementToString(<div><Icon name='code'/></div>))
    }
    toggle() {
        this.setState({
            ...this.state,
            isOpen: !this.state.isOpen
        })
        console.log(this.jsxCodeRef)
    }
    render() {
        const { isOpen } = this.state;
        return this.state ? (
            <div className='code-block'>
                <span className='toggle' onClick={() => this.toggle()}>
                    <Icon name='code' /> {isOpen ? 'hide code' : 'code'}
                </span>
                {isOpen
                    ? <Highlight className='jsx'>
                        {this.jsxCodeRef && this.jsxCodeRef.textContent}
                        {this.snippet}
                    </Highlight>
                    : null
                }
                <div ref={(jsxCode) => {this.jsxCodeRef = jsxCode}}>
                    {this.props.children}
                </div>
            </div>
        ) : null
    }
}

export default CodeDemo;