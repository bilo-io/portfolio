import React from 'react';
import './style.scss';
const List = (props) => {
    return (
        <div className="list">
            <ul>
                {props.children}
            </ul>
        </div>
    )
}

export default List;