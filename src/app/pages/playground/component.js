import React from 'react';
// DraftJS
import { EditorState, RichUtils } from 'draft-js';
// DraftJS Plugins
import Editor from 'draft-js-plugins-editor';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import 'draft-js-hashtag-plugin/lib/plugin.css';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import 'draft-js-linkify-plugin/lib/plugin.css';
// DraftJS END
import './style.scss';
import editorStyles from './styles-editor.scss';

const hashtagPlugin = createHashtagPlugin();
const linkifyPlugin = createLinkifyPlugin();

const plugins = [
    hashtagPlugin,
    linkifyPlugin
]
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
                    <div className='custom-input' onClick={this.focus}>
                        <Editor
                            editorState={this.state.editorState}
                            handleKeyCommand={this.handleKeyCommand}
                            onChange={this.onChange}
                            plugins={plugins}
                            ref={(element) => { this.editor = element }}
                        />
                    </div>
                </div>
            </div>
        ) : null
    }
    focus = () => {
        this.editor.focus();
    };
    onChange = (editorState) => {
        this.setState({
            editorState,
        });
    };
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