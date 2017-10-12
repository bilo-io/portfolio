import React, { Component, PropTypes } from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin';
import './style.scss';

export default class Autocomplete extends Component {
    static propTypes = {
        // isActive: PropTypes.bool,
        // hello: PropTypes.func.isRequired,
        // index: PropTypes.number.isRequired,
        // name: PropTypes.string.isRequired
    }
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='page page-padded'>
                <h1>Autocomplete</h1>
            </div>
        )
    }
}