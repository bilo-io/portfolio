import React from 'react';
import Map from '../../containers/map';
import Search from '../../components/search';

require('./style.scss');

export class Places extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='page page-padded'>
                <h1>Places</h1>
                <div className='side'>
                    <Search
                        searchKey={'places'}
                        searchHandle={this.props.searchPlaces}
                        searchResults={this.props.searchResults}
                        selectResult={this.props.selectPlace}
                        showResults={true}
                        placeholder='search...' />
                    {this.props.place ? <div>{this.props.place.formatted_address}</div> : null}
                </div>
                <div className='main'>
                    {/* <Map /> */}
                </div>
            </div>
        )
    }
}

export default Places;