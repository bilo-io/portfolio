import { connect } from 'react-redux';
import Places from './component';

import {
    searchPlaces,
    searchGoogle,
    selectPlace,
    searchGoogleSuccess
} from './actions';

const mapStateToProps = (state, ownProps) => {
    let _state = state.places;
    return {
        place: _state.place,
        query: _state.query,
        searchResults: _state.searchResults,
        error: _state.error
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchPlaces: (searchKey, query) => dispatch(searchPlaces(searchKey, query)),
        searchGoogle: (query) => dispatch(searchGoogle(query)),
        selectPlace: (place) => dispatch(selectPlace(place)),
        searchGoogleSucces: (results) => dispatch(searchGoogleSuccess(results))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Places);