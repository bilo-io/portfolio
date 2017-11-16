import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'

import { dndStyle } from './styles';
import Area from './area';
import Deck from './deck';

@DragDropContext(HTML5Backend)
export default class DnD extends Component {
    render() {
        const cards = [
            {
                name: 'first',
                type: 'number'
            }, {
                name: 'second',
                type: 'number'
            }, {
                name: 'third',
                type: 'number'
            }, {
                name: 'fourth',
                type: 'number'
            }, {
                name: 'alpha',
                type: 'letter'
            }, {
                name: 'beta',
                type: 'letter'
            }, {
                name: 'gamma',
                type: 'letter'
            }
        ]
        const droppedCards = []

        return (
            <div style={dndStyle}>
                <Deck cards={cards} />
                <Area cards={droppedCards} />
            </div>
        )
    }
}