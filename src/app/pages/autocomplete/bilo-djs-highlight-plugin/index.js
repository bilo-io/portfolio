import { RichUtils, KeyBindingUtil, getDefaultKeyBinding } from 'draft-js';

export default () => {
    return {
        customStyleMap: {
            'HIGHLIGHT' : {
                background: 'blue',
                padding: '0.3em',
                color: 'white'
            }
        },
        keyBindingFn: (e) => {
            if(e.key === 'j' && KeyBindingUtil.hasCommandModifier(e)) {
                console.log(e)
                return 'highlight';
            }
            return getDefaultKeyBinding(e)
        },

        handleKeyCommand: (command, editorState, { setEditorState}) => {
            if(command === 'highlight') {
                console.log({command});
                setEditorState(RichUtils.toggleInlineStyle(editorState, 'HIGHLIGHT'));
                return true;
            }
        },
    };
};