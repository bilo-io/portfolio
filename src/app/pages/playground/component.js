import React from 'react';
import { Search } from 'bilo-ui';
import './style.scss';

import BrowserSupport, { detectBrowser } from '../../components/browser-support';

const minBrowserVersions = {
    chrome: '4.10',
    edge: '',
    firefox: '19.5',
    ie: '10',
    opera: '19.9',
    safari: '10.2',
}

export default class Playground extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.onCheck = this.onCheck.bind(this);
        this.setState({ browser: detectBrowser() })
    }
    onCheck(browser) {
        this.setState({
            browser
        }, () => console.log(this.state))
    }
    render() {
        let inlineWarningStyle = {
            margin: '3em',
            padding: '1em',
            border: '1px solid red',
            color: 'white'
        }
        return this.state ? (
            <div className='page'>
                <BrowserSupport supported={minBrowserVersions}/>

                <BrowserSupport
                    onCheck={this.onCheck}
                    supported={minBrowserVersions}
                    className='custom-warning-style'
                />

                <BrowserSupport
                    onCheck={this.onCheck}
                    supported={minBrowserVersions}
                    style={inlineWarningStyle}>
                    <b>
                        {this.state.browser.name} (version: {this.state.browser.version}) unsupported
                    </b> 
                    <div>
                        oh my goodness, we don't seem to support your browser 😳
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', marginTop: '1em'}}>
                        <a href={'https://www.google.com/chrome/browser/desktop/index.html'}>Download Chrome</a>
                        <a href='https://www.mozilla.org/en-US/firefox/new/'>Download Firefox</a>
                        <a href='https://safari.en.softonic.com/mac/download'>Download Safari</a>
                    </div>
                </BrowserSupport>
            </div>
        ) : null
    }
}