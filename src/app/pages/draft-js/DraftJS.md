# Overview

This doc covers the basics of DraftJS, the DraftJS API. Thereafter we cover `draft-js-plugins-editor`, looking at an example of how to include a plugin, and finally, how to write your own plugin using `draft-js-autocomplete-plugin-creator`.

Content:
- **Overview**
- **API**
- **Plugins**
- **Plugin Creator**

## Overview

DraftJS is a React-based component using the ContentEditable to perform rich text editing. As such it has its own state object `EditorState` which gets updated whenever something changes in the editor, whether it is text, a select, or the cursor position. In the next section, we look at how to use the editorState to perform various tasks.

`basic example:`
```jsx
import React from 'react';
import Editor, { EditorState } from 'draft-js';

export default class EditorExample extends React.Component {
    componentDidMount() {
        this.onChange = this.onChange.bind(this);
        this.setState({
            editorState: EditorState.createEmpty(),
        });
    }
    onChange(editorState) {
        this.setState({
            editorState
        })
    }
    render() {
        return this.state ? (
            <Editor
                editorState={this.state.editorState}
                onChange={this.onChange} />
        )
    }
}
```

## DraftJS API

The [Editor Component](https://draftjs.org/docs/api-reference-editor.html#content) requires at least 2 props, as shown in the example above, namely 

|props|type|purpose|
|:-|:-|:-|
|`editorState`|object|contains everything you need to know about the state of the editor|
|`onChange`|function|updates editorState (pushes new state onto stack, due to immutability)|

### EditorState

The [`EditorState`](https://draftjs.org/docs/api-reference-editor-state.html#content) is an immutable Record that represents the entire state of a Draft editor, including:

- The current text content state
- The current selection state
- The fully decorated representation of the contents
- Undo/redo stacks
- The most recent type of change made to the contents

## Plugins

You can include plugins to draftJS (e.g. to add hashtags, emojis, mentions, etc.) using the `Editor` component from `draft-js-plugins-editor` instead of `draft-js`. The example below shows how to make use of the `draft-js-hashtag-plugin`. For a comprehensive list of existing plugins look at [https://www.draft-js-plugins.com](https://www.draft-js-plugins.com).

```jsx
import React from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import 'draft-js-hashtag-plugin/lib/plugin.css';

export default class DraftJSHashTag extends React.Component {
    componentDidMount() {
        this.onChange = (editorState) => this.setState({ editorState })
        this.setState({
            editorState: EditorState.createEmpty(),
        });

        this.hashtagPlugin = createHashtagPlugin();
        this.plugins = [
            this.hashtagPlugin,
        ];
    }
    onChange(editorState) {
        this.setState({
            editorState
        })
    }
    render() {
        return this.state ? (
            <Editor
                editorState={this.state.editorState}
                onChange={this.onChange}
                plugins={this.plugins}
            />
        ): null;
    }
}
```

## Plugin Creator



# FLUID

Below are the API methods used by Fluid.

## EditorComponent:
- Handlers()
- KeyHandlers()
    - `onEscape`
    - `onTab`
    - `onUpArrow`
    - `onRightArrow`
    - `onDownArrow`
    - `onLeftArrow`
- MouseEvents
    - `onFocus`
    - `onBlur`
- Methods
    - `focus()`
    - `blur()`

## EditorState:
>
>Covered:
>- `createEmpty()`
- `push()`
- `moveFocus()`
- `createWithContent()`
- `forceSelection()`
- `getCurrentInlinseStyle()`

## ContentState:
>
>Covered:
>- `createFromText()`

- `createFromBlockArray()`
- `createEntity()`

## ContentBlock

> **NOTE:**  (only used in `autocompleteStrategy`)
- `findEntityRanges()`

## Entity



## RichUtils:

>Covered:
- `toggleInlineStyle`
- `toggleBlockType()`
- ``
- ``

# Query Types

## GET ALL

This is performed, when there is no search query object.
`es-search-query:`
```js
{
    filters: {
        bool: {must: []}
    },
    query: {
        query: []
    },
    sorting_options: {
        key: 'title,
        label: 'Title',
        order: 'asc'
    },
    survey_type: 'Creative::CreativeVideoSurveyType'
}
```

## Basic

### Typing text

Text = *"Hello"*

`es-search-query:`
```js
{
    //...
    query: {
        query: ['hello'],
    }
    //...
}
```

### Selecting from Autocomplete

Select *"**Country:** Germany"*

`es-search-query:`
```js
{
    //...
    query: {
        query: [],
        country: ['Germany'] // NEW ENTRY
    },
    survey_type: 'Creative::CreativeVideoSurveyType'
    //...
}
```

# Intermediate (Dates)

Search **Before**, **After** a date or **Between** 2 dates

`es-search-query:`
```js
{
    filters: {
        bool: {
            must: [
                { 
                    range: {
                    // NEW NODE
                        {
                            created_at: {
                                lte: "2017-10-01T10:00:00.000Z" // before date
                                // OR
                                //gte: "2017-10-01T10:00:00.000Z" // after date
                                // OR 
                                // lte: "..." gte: "..." // date range (between dates)
                            }
                        }
                    }
                }       
            ]
        }
    },
    //...
    survey_type: 'Creative::CreativeVideoSurveyType'
}
```

# Intermediate

(Metric is <= number)
e.g. "**Behaviour Change** is less than or equal to **5**"

`es-search-query:`
```js
{
    //...
    filters: {
        bool: {
            must: [
                { range: {
                        {
                            "fluid_models.fluid_behaviour_change_score.value": {
                                lte: 5
                            }
                        }
                    }
                }
                
            ]
        }
    },
    survey_type: 'Creative::CreativeVideoSurveyType',
    //...
}
```

# Advances

(Metric is <= Norm)

>NOTE: Here the norm should provide the underlying value (so the frontend fetches it and displays it in the dropdown).

>(same `es-search-query` as above)