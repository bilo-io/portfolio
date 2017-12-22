import { Modifier, EditorState } from 'draft-js';

import getSearchText from  '../utils/getSearchText';

export default (editorState, selection) => {
    const currentSelectionState = editorState.getSelection();
    const { begin, end } = getSearchText(editorState, currentSelectionState);

    // get selection of the search text
    const textSelection = currentSelectionState.merge({
        anchorOffset: begin,
        focusOffset: end,
    });

    let replacedContent = Modifier.replaceText(
        editorState.getCurrentContent(),
        textSelection,
        `#${selection.get('id')}`,
    )

    // if the selection is inserted at the end, a space is appended
    const blockKey = textSelection.getAnchorKey();
    const blockSize = editorState.getCurrentContent().getBlockForKey(blockKey).getLength();
    if(blockSize === end) {
        replacedContent = Modifier.insertText(
            replacedContent,
            replacedContent.getSelectionAfter(),
            ' ',
        );
    }

    const newEditorState = EditorState.push(
        editorState,
        replacedContent,
        'insert-selection'
    );
    return EditorState.forceSelection(newEditorState, replacedContent.getSelectionAfter());
}