# DraftJS Autocomplete Plugin

Here we go over how to use and extend the autocomplete plugin.

## Dependencies

|package|purpose|
|:-|:-|
|`draft-js-plugins-editor`||
|`draft-js-autocomplete-plugins-creator`||
|`decorate-component-with-props`||
|`find-with-regex`||

## Usage

```jsx
import React, { Component } from 'react';
import Editor from 'draft-js-autocomplete-plugins-creator';
export default class MyExample extends Component {
    constructor(props) {

    }
    componentDidMount() {
        this.initEditor();
    }
    initEditor() {

    }
    render() {
        return this.state ? (
            <div>
                <Editor
                    editorState={this.state.editorState}
                    plugins={this.plugins} />
            </div>
        ): null;
    }
}
```

## Extend the Plugin

In order to learn how to extend the plugin you'll need to understand how it works, and what it's structure is first.

### How it works

