import React from 'react';
import {Button, Icon, Loader, LoaderType} from 'bilo-ui';
import CodeDemo from '../../components/code-demo';

class XUI extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='page page-padded'>
                <h1>XUI</h1>
                <p>
                    A custom component & style library for React.
                </p>

                <h2>App</h2>
                <div></div>
                
                <h2>Icons</h2>
                    <Icon name={'camera'} style={{padding: '1em'}}/>
                    <Icon name={'bars'} transform={'rotate-90'}/>
                {/* <CodeDemo>
                </CodeDemo> */}

                <h2>Loaders</h2>
                <Loader type={LoaderType.SPINNER}/>
                <Loader type={LoaderType.RAINBOW}/>

            </div>
        )
    }
}

export default XUI;