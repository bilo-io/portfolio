import React, {Component} from 'react';
import Editor, {createEditorStateWithText} from 'draft-js-plugins-editor';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import editorStyles from './editorStyles.css';
import DraftJSCard from '../draftjs-card';
import '../style.scss';

const emojiPlugin = createEmojiPlugin();
const {EmojiSuggestions, EmojiSelect} = emojiPlugin;
const plugins = [emojiPlugin];
const text = `Cool, we can have all sorts of Emojis here. 🙌
🌿☃️🎉🙈 aaaand maybe a few more here 🐲☀️🗻 Quite fun!`;

export default class DraftJSEmoji extends Component {

    state = {
        editorState: createEditorStateWithText(text)
    };

    onChange = (editorState) => {
        this.setState({editorState});
    };

    focus = () => {
        this
            .editor
            .focus();
    };

    render() {
        return (
            <DraftJSCard title='Hashtag'>
                <div className={editorStyles.editor} onClick={this.focus}>
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        plugins={plugins}
                        ref={(element) => {
                        this.editor = element;
                    }}/>
                    <EmojiSuggestions/>
                </div>
                <div className={editorStyles.options}>
                    {/* <EmojiSelect/> */}
                </div>
            </DraftJSCard>
        );
    }
}