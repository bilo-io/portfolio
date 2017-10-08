import React from 'react';
import DraftJSCard from '../draftjs-card';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import 'draft-js-hashtag-plugin/lib/plugin.css';
import '../style.scss';

export default class DraftJSHashTag extends React.Component {
    constructor(props) {
        super(props)

        this.hashtagPlugin = createHashtagPlugin();
        this.plugins = [
            this.hashtagPlugin,
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
            <DraftJSCard title='Hashtag'>
                <Editor 
                    className='custom-input'
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    plugins={this.plugins} 
                />
            </DraftJSCard>
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