import { RichUtils, KeyBindingUtil, getDefaultKeyBinding } from 'draft-js';

export default () => {
    return {
        customStyleMap: {
            'HIGHLIGHT' : {
                background: 'blue',
                padding: '0.3em',
                color: 'white'
            },
            'BBOLD': {
                fontWeight: 'bold'
            }
        },
        keyBindingFn: (e) => {
            if(e.key === 'j' && KeyBindingUtil.hasCommandModifier(e)) {
                console.log(e)
                return 'highlight';
            }
            if(e.key === 'b' && KeyBindingUtil.hasCommandModifier(e)) {
                return 'bbold';
            }
            return getDefaultKeyBinding(e)
        },
        handleKeyCommand: (command, editorState, { setEditorState}) => {
            if(command === 'highlight') {
                console.log({command});
                setEditorState(RichUtils.toggleInlineStyle(editorState, 'HIGHLIGHT'));
                return true;
            }
            if(command === 'bbold') {
                console.log({command});
                setEditorState(RichUtils.toggleInlineStyle(editorState, 'BBOLD'));
            }
        },
    };
};