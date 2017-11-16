import React from 'react';
import { DnD } from '../../components/dnd';
import './style.scss';

export default class Playground extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <h1>drag n drop</h1>

                <DnD />

            </div>
        )
    }
}