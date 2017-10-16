import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';

import './styles/autocompleteSuggestionsEntry.scss';

export default class AutocompleteEntry extends Component {
    static propTypes = {
        completion: PropTypes.instanceOf(Immutable.Map).isRequired,
        index: PropTypes.number.isRequired,
        isFocused: PropTypes.bool.isRequired,
        onCompletionFocus: PropTypes.func.isRequired,
        onCompletionSelect: PropTypes.func.isRequired,
    };

    //#region Initialisation
    constructor() {
        super(props)
        this.mouseDown = false;
    }
    componentDidUpdate() {
        this.mouseDown = false;
    }
    //#endregion

    //#region Mouse Events
    onMouseUp = (event) => {
        //NOTE: important to avoid acontent edit change
        event.preventDefault();
        this.mouseDown = false;
    }
    onMouseDown = () => {
        this.mouseDown = true;
    }
    onMouseEnter = () => {
        this.props.onCompletionFocus(this.props.index);
    }
    //#endregion

    render() {
        let { isFocused } = this.props;
        return (
            <div
                className={`suggestionsEntry${isFocused ? 'Focused' : ''}`}
                onMouseUp={this.onMouseUp}
                onMouseDown={this.onMouseDown}
                onMouseEnter={this.onMouseEnter}
                role='option'
            >
                <span className={'suggestionsEntryText'}>
                    <span className='bold'>{`#${this.props.completion.get('id')}`}</span>
                    <span>{`${this.props.completion.get('subject')}`}</span>
                </span>

            </div>
        )
    }
}