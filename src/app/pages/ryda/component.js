import React from 'react';
import Map from '../../containers/map';
import Search from '../../components/search';

require('./style.scss');

export class Ryda extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='page page-padded'>
                <h1>Places</h1>
                <div className='side'>
                    <Search
                        tag={'start'}
                        placeholder='starting point...'
                        searchHandle={this.props.searchPlaces}
                        showSuggestions={true}
                        suggestions={this.props.searchResults.start}
                        selectResult={this.props.selectPlace}/>

                    <Search
                        tag={'end'}
                        placeholder='destination...'
                        searchHandle={this.props.searchPlaces}
                        showSuggestions={true}
                        suggestions={this.props.searchResults.end}
                        selectResult={this.props.selectPlace}/>
                </div>
                <div className='main'>
                    {/* <Map /> */}
                </div>
            </div>
        )
    }
}

export default Ryda;