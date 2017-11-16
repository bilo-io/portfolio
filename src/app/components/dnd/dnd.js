import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'

import { dndStyle } from './styles';
import Area from './area';
import Deck from './deck';

@DragDropContext(HTML5Backend)
export default class DnD extends Component {
    render() {
        return (
            <div style={dndStyle}>
                <Deck />
                
                <Area />
                <Area />
            </div>
        )
    }
}