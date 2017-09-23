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
                        searchKey={'place'}
                        searchHandle={this.props.searchPlaces}
                        searchResults={this.props.searchResults}
                        selectResult={this.props.selectPlace}
                        showResults={true}
                        placeholder='search...' />
                    {/* {this.props.searchSelections.place ? <div>{this.props.searchSelections.place.formatted_address}</div> : null} */}

                    <Search
                        searchKey={'start'}
                        searchHandle={this.props.searchPlaces}
                        searchResults={this.props.searchResults}
                        selectResult={this.props.selectPlace}
                        showResults={true}
                        placeholder='search...' />
                    
                    <Search
                        searchKey={'end'}
                        searchHandle={this.props.searchPlaces}
                        searchResults={this.props.searchResults}
                        selectResult={this.props.selectPlace}
                        showResults={true}
                        placeholder='search...' />
                </div>
                <div className='main'>
                    {/* <Map /> */}
                </div>
            </div>
        )
    }
}

export default Places;