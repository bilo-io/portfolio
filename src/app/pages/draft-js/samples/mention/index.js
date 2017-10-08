import React from 'react';
import DraftJSCard from '../draftjs-card';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-linkify-plugin';
import { Icon } from 'bilo-ui';
import mentions from './mentions';
import editorStyles from './style.scss';
const mentionPlugin = createMentionPlugin({mentions})
export default class DraftJSMention extends React.Component {
    constructor(props) {
        super(props)

        // this.mentionPlugin = createMentionPlugin({
        //     mentions,
        //     mentionComponent: (mentionProps) => (
        //         <span
        //             className={mentionProps.className}
        //             // eslint-disable-next-line no-alert
        //             onClick={() => alert('Clicked on the Mention!')}
        //         >
        //             {mentionProps.children}
        //         </span>
        //     ),
        // });
        
        this.plugins = [
            mentionPlugin
        ]
    }
    componentDidMount() {
        this.setState({
            editorState: EditorState.createEmpty()
        });
        this.onChange = (editorState) => this.setState({ editorState })
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
    }
    render() {
        const { MentionSuggestions } = this.mentionPlugin;
        const plugins = [this.mentionPlugin];

        return this.state ? (
            <DraftJSCard title='Mention' className={editorStyles.editor}>
                {/* <Icon name={'menu'}/> */}
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    plugin={this.plugins}
                />
                {/* <MentionSuggestions
                    onSearchChange={this.onSearchChange}
                    suggestions={this.state.suggestions}
                /> */}
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
    state = {
        editorState: EditorState.createEmpty(),
        suggestions: mentions,
    };
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
    focus = () => {
        this.editor.focus();
    };
}