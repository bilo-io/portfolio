import React, {Component, PropTypes} from 'react';
import './style.scss';

export default class User extends Component {
    static propTypes = {
        isActive: PropTypes.bool,
        user: PropTypes.object.isRequired,
        envs: PropTypes.array
    }
    // #region Lifecycle
    // https://reactjs.org/docs/react-component.html#componentwillreceiveprops
    // mounting
    constructor(props) {
        super(props)
    }
    //#endregion
    render() {
        const {username, fullname, avatarUrl} = this.props.user;
        return (
            <div className='user'>
                <img src={avatarUrl}/>
                <div>
                    <div className='username'>{username}</div>
                    <div className='fullname'>{fullname}</div>
                </div>
            </div>
        )
    }
}