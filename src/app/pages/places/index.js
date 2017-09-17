import { connect } from 'react-redux';
import Places from './component';

import {
    searchPlaces,
    searchGoogle,
    selectResult,
    searchGoogleSuccess
} from './actions';

const mapStateToProps = (state, ownProps) => {
    let _state = state.places;
    return {
        query: _state.query,
        results: _state.results,
        error: _state.error
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchPlaces: (query) => dispatch(searchPlaces(query)),
        searchGoogle: (query) => dispatch(searchGoogle(query)),
        selectResult: (result) => dispatch(selectResult(result)),
        searchGoogleSucces: (results) => dispatch(searchGoogleSuccess(results))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Places);