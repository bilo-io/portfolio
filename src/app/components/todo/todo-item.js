import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ onClick, completed, text }) => (
    <li onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
    </li>
)

// TodoItem.PropTypes = {
//     onClick: PropTypes.func.isRequired,
//     completed: PropTypes.func.isRequired,
//     text: PropTypes.func.isRequired
// }

export default TodoItem;