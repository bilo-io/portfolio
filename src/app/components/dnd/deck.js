import React, { Component } from 'react'
import { deckStyle } from './styles'
import Card from './card'

export default class Deck extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { cards } = this.props;

        return (
            <div style={deckStyle}>
                <h3>Deck</h3>
                {cards && cards.map( (card, idx) => (
                    <Card key={idx} name={card.name} type={card.type} />
                ))}
            </div>
        )
    }
}