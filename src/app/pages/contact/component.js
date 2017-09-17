import React from 'react';
require('./style.scss');

const MyComponent = (props) => {
    return (
        <div>
            <h2>contact me</h2>
            <p>Drop me a line or two and I'll try to get back asap!</p>
            <input type="text" placeholder="your email"/>
            <input type="text" placeholder="must be 'bout something" />
            <textarea placeholder={"... so what is your message?"} /> 
            <br />
            <button onClick={ () => { props.sendEmail() }}>SEND</button>
        </div>
    )
}

export default MyComponent;