import React, { PropTypes } from 'react';
import './styles.scss';

const DefaultBlock = (props) => {
    <span className='default-block'>{props.children}</span>
}

DefaultBlock.propTypes = {
    children: PropTypes.any
}