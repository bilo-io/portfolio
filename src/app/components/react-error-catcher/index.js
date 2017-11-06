// https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html
import React from 'react';
import './style.scss';
export default class MyComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidCatch(error, errorInfo) {
        this.setState({error, errorInfo})
    }
    render() {
        return this.state.errorInfo
            ? <div className='error-catcher'>
                    <details>
                        <summary>{this.state.error && this
                                .state
                                .error
                                .toString()}</summary>
                        <p><br/>{this.state.errorInfo.componentStack}</p>
                    </details>
                </div>
            : this.props.children;
    }
}