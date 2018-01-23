import { connect } from 'react-redux';
import React from 'react';
import Map from '../../containers/map';
import { If, Search } from 'bilo-ui';
import Button from 'bilo-ui/dist';

require('./style.scss');

import {
    searchPlaces,
    searchGoogle,
    selectPlace,
    searchGoogleSuccess
} from './actions';

const mapStateToProps = (state, ownProps) => {
    let _state = state.places;
    return {
        searchSelections: _state.searchSelections,
        query: _state.query,
        searchResults: _state.searchResults,
        error: _state.error
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchPlaces: (searchTag, query) => dispatch(searchPlaces(searchTag, query)),
        searchGoogle: (query) => dispatch(searchGoogle(query)),
        selectPlace: (searchTag, place) => dispatch(selectPlace(searchTag, place)),
        searchGoogleSucces: (results) => dispatch(searchGoogleSuccess(results))
    }
}

export class Ryda extends React.Component {
    constructor(props) {
        super(props)
    }
    selectPlace(searchTag, place) {
        console.log(`selected ${searchTag}:`, place)
        this.props.selectPlace(searchTag, place)
    }
    render() {
        const { start, end, searchResults, searchPlaces, selectPlace } = this.props
        
        return (
            <div className='page'>
                <div className='ryda-layout'>
                    <div className='side'>
                        <Search
                            tag={'start'}
                            placeholder='starting point...'
                            search={searchPlaces}
                            suggestionsOn={true}
                            suggestions={searchResults.start}
                            select={selectPlace}
                            selection={start ? start.formatted_address : null} />
                        <If isTrue={searchResults.start !== undefined}>
                            {searchResults.start && searchResults.start.map(place =>
                                <SearchResult
                                    place={place}
                                    select={(selection) => this.selectPlace('start', selection)} />)}
                        </If>    

                        <Search
                            tag={'end'}
                            placeholder='destination...'
                            search={searchPlaces}
                            suggestionsOn={true}
                            suggestions={searchResults.end}
                            select={selectPlace}
                            selection={end ? end.formatted_address : null} />
                        <If isTrue={searchResults.end !== undefined}>
                            {searchResults.end && searchResults.end.map(place =>
                                <SearchResult
                                    place={place}
                                    select={(selection) => this.selectPlace('end', selection)} />)}
                        </If>    
                        {/* <Button /> */}
                        <button style={{ width: '100%', marginTop: '1em' }}
                            onClick={() => {
                                this.props.fetchJourneys()
                            }}>
                            Find Trips
                        </button>
                    </div>
                    <div className='main'>
                        {<Map/>}
                    </div>
                </div>
            </div>
        )
    }
}

export const SearchResult = (props) => (
    <div
        onClick={() => props.select(props.place)}
        style={{background:'white', color: 'black', position: 'relative', width: '100%', height: '3em', lineHeight: '3em'}}>
        {props.place.address}
    </div>
)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Ryda);