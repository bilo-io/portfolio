import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js'
import './style.scss';

export class Playground extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.setState({ editorState: EditorState.createEmpty() });
        this.onChange = (editorState) => this.setState({ editorState })
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
    }
    render() {
        return this.state ? (
            <div className='page page-padded'>
                <h1>{this.props.title}</h1>
                <div className="ws-card">
                    <button onClick={this._onBoldClick.bind(this)}>Bold</button>
                    <button onClick={this._onToggleCode.bind(this)}>{'< code />'}</button>
                    <div className='custom-input'>
                        <Editor
                            editorState={this.state.editorState}
                            handleKeyCommand={this.handleKeyCommand}
                            onChange={this.onChange}
                        />
                    </div>
                </div>
            </div>
        ) : null
    }
    handleKeyCommand(command) {
        console.log({ command })
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }
    _onBoldClick() {
        this.onChange(RichUtils.toggleInlineStyle(
            this.state.editorState,
            'BOLD'
        ));
    }
    _onToggleCode() {
        this.onChange(RichUtils.toggleCode(this.state.editorState));
    }
}

export default Playground;