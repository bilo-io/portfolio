import { connect } from 'react-redux';
import Tutorials from './component'

import {
    openTutorial,
    updateQuery
} from './actions';

const mapStateToProps = (state, ownProps) => {
    let _state = state.tutorials;
    console.log({ state });
    return {
        query: _state.query,
        tutorial: _state.tutorial
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        openTutorial: (tut) => dispatch(openTutorial(tut)),
        updateQuery: (query) => dispatch(updateQuery(query))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tutorials)

