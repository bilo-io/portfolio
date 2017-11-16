import React, { Component } from 'react'
import { deckStyle } from './styles'
import Card from './card'

export default class Deck extends Component {
    render() {
        return (
            <div style={deckStyle}>
                <h3>Deck</h3>
                <Card name='first' />
                <Card name='second' />
                <Card name='third' />
            </div>
        )
    }
}