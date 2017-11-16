//https://github.com/react-dnd/react-dnd/tree/master/examples/01%20Dustbin/Single%20Target
import React, { Component } from 'react'
import { cardStyle } from './styles'
import { DragSource } from 'react-dnd'
import { ItemTypes } from './item-types'

const cardSource = {
    beginDrag(props, monitor, component) {
        return {
            name: props.name
        }
    },
    endDrag(props, monitor) {
        const item = monitor.getItem()
        const dropResult = monitor.getDropResult()

        if(dropResult) {
            console.log(`You dropped "${item.name}" into "${dropResult.name}"`)
        }
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

@DragSource(ItemTypes.CARD, cardSource, collect)
export default class Card extends Component {
    render() {
        const { connectDragSource, isDragging } = this.props;
        return connectDragSource(
            <div style={cardStyle}>
                {this.props.name}
            </div>
        )
    }
}