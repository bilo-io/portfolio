import React from 'react';
// DraftJS
import { EditorState, RichUtils } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
// DraftJS Plugin Components
import DraftJSCustom from './samples/custom';
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
                <DraftJSCustom />
                <DraftJSHashTag />
                <DraftJSLinkify />
                <DraftJSMention />
                {/* <DraftJSEmoji /> */}
            </div>
        )
    }
}

export default DraftJS;