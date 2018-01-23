import React from 'react';
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
            isOpen: false
        })
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
            <div className='ws-card'>
                <div className='code-block'>
                    <span className='toggle' onClick={() => this.toggle()}>
                        <Icon name='code' /> {isOpen ? 'hide code' : 'code'}
                    </span>
                </div>
                { this.props.children }
            </div>
        ) : null
    }
}

export default CodeDemo;