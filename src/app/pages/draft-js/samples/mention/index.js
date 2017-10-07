import React from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createMentionPlugin from 'draft-js-linkify-plugin';
import './style.scss';

export default class DraftJSMention extends React.Component {
    constructor(props) {
        super(props)
        this.mentionPlugin = createMentionPlugin();
        this.plugins = [
            this.mentionPlugin
        ]
    }
    componentDidMount() {
        this.setState({
            editorState: EditorState.createEmpty()
        });
        this.onChange = (editorState) => this.setState({editorState})
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
    }
    render() {
        return this.state ? (
            <div className='ws-card'>
                <label>Mention</label>

            </div>
        ): null
    }            
}