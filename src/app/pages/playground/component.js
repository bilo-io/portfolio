import React from 'react';
import './style.scss';
import Loader, { LoaderType } from '../../components/loader';

export default class Playground extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.setState({})
    }
    render() {
        return this.state ? (
            <div className='page page-padded'>
                <h1>{this.props.title}</h1>

                <h2>Icons</h2>
                <h2>Loaders</h2>
                {/* <Loader type={LoaderType.SPINNER}/> */}
                <Loader type={LoaderType.RAINBOW}/>
                
            </div>
        ) : null
    }
}