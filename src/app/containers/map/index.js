import { connect } from 'react-redux';
import Map from './leaflet'

import {
    myAction
} from './actions';

const mapStateToProps = (state, ownProps) => {
    let _state = state.map;
    return {
        myProps: _state.myProps
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        myAction: () => dispatch(myAction())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Map)

