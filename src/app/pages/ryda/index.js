import { connect } from 'react-redux';
import Ryda from './component';

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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Ryda);