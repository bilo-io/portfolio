import React, { Component, PropTypes } from 'react';
import './style.scss';

export default class Firebase extends Component {
    static propTypes = {
    }
    //#region Lifecycle
    // https://reactjs.org/docs/react-component.html#componentwillreceiveprops
    // mounting
    constructor(props) {
        super(props)
    }
    componentWillMount() {}
    componentDidMount() {}
    // updates
    componentWillReceiveProps(nextProps) {}
    shouldComponentUpdate(nextProps, nextState) {}
    componentDidWillUpdate(nextProps, nextState) {}
    componentDidUpdate(prevProps, prevState) {}
    // unmounting & error handling
    componentWillUnMount() {}
    componentDidCatch(error, info) {}
    //#endregion
    render() {
        return (
            <div className='page page-padded'>
                <h1>Firebase</h1>
            </div>
        )
    }
}