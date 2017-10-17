import { EditorState } from 'draft-js';

export const all = (draftEditorState) => {
    console.group('%cdraft-js-logger','color:#00adee');
        editorState(draftEditorState);
        contentState(draftEditorState);
    console.groupEnd();
}

export const editorState = (editorState) => {
    console.group('%ceditorState', 'color:white', {...editorState});
    console.log('%c selection:   ','color:#00adee', editorState.getSelection());
    console.log('%c contentState:','color:#00adee', editorState.getCurrentContent());
    console.log('%c blockTree:','color:#00adee', editorState.getBlockTree());
    console.groupEnd();
}

export const contentState = (editorState) => {
    let contentState = editorState.getCurrentContent();
    console.group('%ccontentState', 'color:green', {...contentState});
    console.log('blockMap:  ', contentState.getBlockMap());
    console.log('entityMap: ', contentState.getEntityMap());
    console.groupEnd();
}

export const blockState = (editorState) => {
    let blockState = editorState.getBlockTree();
}

let logger = {
    all,
    editorState,
    contentState
}
export default logger;