import React from 'react';
import Map from '../../containers/map';
require('./style.scss');

export class Places extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='page'>
                <h1>Places</h1>
                <div className='side'>
                <input
                    onChange={(e) => {
                        this.props.searchPlaces(e.target.value)
                    }} />
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {
                        this.props.results.map((result, idx) => {
                            return <div key={idx}>{result.formatted_address}</div>
                        })
                    }
                    </div>
                </div>    
                <div className='main'>
                    <Map />
                </div>
            </div>
        )
    }    
}

export default Places;