import React from 'react';
// DraftJS
import { EditorState, RichUtils } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
// DraftJS Plugin Components
import DraftJSHashTag from './samples/hashtag';
import DraftJSLinkify from './samples/linkify';
import DraftJSMention from './samples/mention';
import DraftJSEmoji from './samples/emoji';
import './style.scss';

export class DraftJS extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='page page-padded'>
                <h1>DraftJS</h1>
                
            icon:<i className='fa fa-menu fa-lg' />
                
                <DraftJSHashTag />
                <DraftJSLinkify />
                <DraftJSEmoji />
                {<DraftJSMention />}
            </div>
        )
    }
}

export default DraftJS;