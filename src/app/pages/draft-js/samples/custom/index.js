import React from 'react';
import DraftJSCard from '../draftjs-card';
import { EditorState, ContentState } from 'draft-js';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import logger from '../../utils/draft-js-logger';

import './style.scss';
export default class DraftJSCustom extends React.Component {
    componentDidMount() {
        this.setState({
            editorState: createEditorStateWithText('hello this is a test string')
        }, () => {
            // logger.all(this.state.editorState)
        })
        this.onChange = this.onChange.bind(this);
    }
    onChange(editorState) {
        this.setState({
            editorState
        }, () => {
            // logger.all(this.state.editorState);
            this.detectSelection(editorState);
            this.detectContent(editorState);
        })
    }
    
    render() {
        return this.state ? (
            <DraftJSCard title='Custom'>
                <Editor
                    className='custom-editor'
                    editorState={this.state.editorState}
                    onChange={this.onChange} 
                    />
            </DraftJSCard>
        ): null;
    }
    detectSelection(editorState) {
        let selection = editorState.getSelection();
        console.log({selection});
    }
    detectContent(editorState) {
        let contentState = editorState.getCurrentContent();
        let content = contentState.getEntityMap();
        let blocks = contentState.getBlockMap().map( (i) => i.getKey());
        let firstKey = blocks.first();
        console.log({content, blocks});
        console.log(blocks.get(firstKey));
    }
}