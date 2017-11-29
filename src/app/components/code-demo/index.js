import React from 'react';
import Highlight from 'react-hljs'
import { Icon } from 'bilo-ui'
import './style.scss'

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
    }
    toggle() {
        this.setState({
            ...this.state,
            isOpen: !this.state.isOpen
        })
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
                        {this.snippet}
                    </Highlight>
                    : null
                }
                <div>
                    {this.props.children}
                </div>
            </div>
        ) : null
    }
}

export default CodeDemo;