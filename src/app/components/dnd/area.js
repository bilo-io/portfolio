import React, { Component } from 'react'
import { areaStyle } from './styles'
import { DropTarget } from 'react-dnd'
import { ItemTypes } from './item-types'
import { log } from '../../../utils/logger'

const logger = new Logger(`<Area />`)
const areaTarget = {
    drop(props, monitor, component) {
        logger.log(`dropping: `, props, monitor, component)
        return {
            name: 'Area'
        }
    }
}

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }
}

@DropTarget(ItemTypes.CARD, areaTarget, collect)
export default class Area extends Component {
    render() {
        const { connectDropTarget, isOver } = this.props;

        return connectDropTarget(
            <div style={areaStyle}>
                {
                    this.props.children
                        ? this.props.children
                        : <div style={{position: 'absolute'}}>drop stuff here...</div>
                }

                {isOver &&
                    <div style={{
                        // position: 'relative',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        zIndex: 1,
                        opacity: 0.5,
                        backgroundColor: 'yellow',
                    }} />
                }
            </div>
        )
    }
}