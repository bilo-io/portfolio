import React, { Component, PropTypes } from 'react';
import { List, fromJS } from 'immutable';
import './style.scss';

import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createAutocompletePlugin, { defaultSuggestionsFilter } from './draft-js-autocomplete-plugin';
const autocompletePlugin = createAutocompletePlugin();
const { CompletionSuggestions } = autocompletePlugin;

const suggestions = fromJS([
    {
        id: 1,
        subject: 'New Cool Feature',
    },
    {
        id: 2,
        subject: 'Bug',
    },
    {
        id: 3,
        subject: 'Improve Documentation',
    },
]);

export default class Autocomplete extends Component {

    //#region Initialisation
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
    }
    componentDidMount() {
        this.initEditor();
    }
    initEditor() {
        this.plugins = [autocompletePlugin];
        this.setState({
            editorState: EditorState.createEmpty(),
            suggestions: List()
        })
    }
    //# endregion

    //#region Editor
    onChange = (editorState, cb) =>  this.setState({ editorState }, () => cb);

    onSearchChange = ({ value }) => {
        const searchValue = value.substring(1, value.length);
        this.setState({
            suggestions: defaultSuggestionsFilter(searchValue, suggestions)
        }, () => this.logStates(this.state.editorState));
    };
    focus = () => this.refs.editor.focus();

    logStates = (editorState) => {
        return;
        let contentState = editorState.getCurrentContent();
        console.log('onSearchChange(): state\n', this.state);
        console.log(
            '\neditorState: ', editorState,
            '\ncontentState:', contentState
        )
    }
    //#endregion

    render() {
        return this.state ? (
            <div className='page page-padded'>
                <h1>Autocomplete</h1>
                <div className='my-editor'>
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange} 
                        plugins={this.plugins}
                        spellCheck
                        stripPastedStyles
                        placeholder='enter text with #'
                        ref='editor'
                    />

                    <CompletionSuggestions
                        onSearchChange={this.onSearchChange}
                        suggestions={this.state.suggestions} 
                    />
                </div>
            </div>
        ) : null
    }
}