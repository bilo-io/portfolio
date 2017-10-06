import React from 'react';
import './style.scss';
import { Editor, EditorState } from 'draft-js'

export class Playground extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.setState({ editorState: EditorState.createEmpty()});
        this.onChange = (editorState) => this.setState({ editorState })
    }
    render() {
        return this.state ? (
            <div className='page page-padded'>
                <h1>{this.props.title}</h1>
                <div className="ws-card">
                    <label>draft-js</label>
                    <Editor editorState={this.state.editorState} onChange={this.onChange} />
                </div>
            </div>
        ) : null
    }
}

export default Playground;