import React from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import 'draft-js-linkify-plugin/lib/plugin.css';
import './style.scss'

export default class DraftJSLinkify extends React.Component {

    constructor(props) {
        super(props)

        this.linkifyPlugin = createLinkifyPlugin();
        this.plugins = [
            this.linkifyPlugin,
        ]
    }
    componentDidMount() {
        this.setState({
            editorState: EditorState.createEmpty(),
        });
        this.onChange = (editorState) => this.setState({ editorState })
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
    }

    render() {
        return this.state ? (
            <div className='ws-card'>
                <label>Linkify</label>
                <div className='custom-input'>
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        plugins={this.plugins}
                    />
                </div>
            </div>
        ) : null
    }
    onChange = (editorState) => {
        this.setState({
            editorState,
        });
    };
    handleKeyCommand(command) { 
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command); 
        if (newState) { 
            this.onChange(newState); 
            return 'handled'; 
        } 
        return 'not-handled'; 
    } 
}