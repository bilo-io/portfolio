import React from 'react';
import {Button, Icon, If, Loader, LoaderType} from 'bilo-ui';
import CodeDemo from '../../components/code-demo';
import { connect } from 'react-redux';
import Icons from './demos/icons'
import Inputs from './demos/inputs'
import Loaders from './demos/loaders'
import './style.scss'

import {
    myAction
} from './actions';

const mapStateToProps = (state, ownProps) => {
    let _state = state.xui;
    return {
        myProps: _state.myProps
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        myAction: () => dispatch(myAction())
    }
}

class XUI extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        activePage: 'inputs'
    }
    selectSection = (page) => {
        this.setState({ ...this.state, activePage: page }, () => console.log(this.state))
    }

    render() {
        const uiPages = [
            'icons',
            'loaders',
            'inputs',
            'xui'
        ]
        const { activePage } = this.state
        return (
            <div className='page page-padded'>
                <div className={'nav-menu'}>
                    {
                        uiPages.map((page) => {
                            return <div
                                key={`xui-page-${page}`}
                                className={`nav-item ${page === activePage ? 'nav-item-active' : ''}`}
                                onClick={() => this.selectSection(page)}>
                                {page}
                            </div>
                        })
                    }    
                </div>
                <div className={'nav-content'}>
                    <If isTrue={activePage === 'icons'}>
                        <Icons />
                    </If>
                    <If isTrue={activePage === 'loaders'}>
                        <Loaders />
                    </If>
                    <If isTrue={activePage === 'inputs'}>
                        <Inputs />
                    </If>    
                </div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(XUI)

