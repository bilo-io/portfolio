import React from 'react';
import DraftJSCard from '../draftjs-card';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin';
import { Icon } from 'bilo-ui';
import mentions from './mentions';
import editorStyles from './style.scss';

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
            editorState: EditorState.createEmpty(),
            suggestions: mentions
        }, () => {console.log(this.state.suggestions)});
        this.onChange = (editorState) => this.setState({ editorState })
    }
    render() {
        const { MentionSuggestions } = this.mentionPlugin;

        return this.state ? (
            <DraftJSCard title='Mention' className={editorStyles.editor}>
                {/* <Icon name={'menu'}/> */}
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    plugins={this.plugins}
                    ref={(element) => { this.editor = element; }}
                />
                <MentionSuggestions
                    onSearchChange={this.onSearchChange}
                    suggestions={this.state.suggestions}
                />
            </DraftJSCard>
        ) : null
    }
    handleKeyCommand(command) {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }
    onChange = (editorState) => {
        this.setState({
            editorState,
        });
    };
    onSearchChange = ({ value }) => {
        this.setState({
            suggestions: defaultSuggestionsFilter(value, mentions),
        });
    };
    onAddMention = () => {
        // get the mention object selected
    }
    focus = () => {
        this.editor.focus();
    };
}