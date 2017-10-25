import React from 'react';
import { Search } from 'bilo-ui';
import './style.scss';

import BrowserDetector, { initialState } from '../../components/browser-detector';


export default class Playground extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.onCheck = this.onCheck.bind(this);
        this.setState({ browserSupport: initialState() })
    }
    onCheck(browserSupport) {
        this.setState({
            browserSupport
        }, () => console.log(this.state))
    }
    render() {
        const supportedBrowsers = {
            chrome: {
                minVersion: '4.10',
            },
            firefox: {
                minVersion: '19.5',
            },
            safari: {
                minVersion: '10.2',
            },
            ie: {
                minVersion: '10',
            },
            opera: {
                minVersion: '19.9'
            }
        }
        let inlineWarningStyle = {
            margin: '3em',
            background: 'red',
            color: 'white'
        }
        return this.state ? (
            <div className='page'>
                <BrowserDetector supported={supportedBrowsers}/>

                <BrowserDetector
                    onCheck={this.onCheck}
                    supported={supportedBrowsers}
                    className={'custom-warning-style'} 
                />

                <BrowserDetector
                    onCheck={this.onCheck}
                    supported={supportedBrowsers}
                    style={inlineWarningStyle}
                    >
                    <b>
                        {this.state.browserSupport.browser.name}, version: {this.state.browserSupport.browser.version} unsupported
                    </b> 
                    <br />
                    oh my goodness, we don't seem to support your browser 😳
                    <br />
                    <a 
                        style={{marginTop: '5em'}}
                        href={'https://www.google.com/chrome/browser/desktop/index.html'}>Download Chrome</a>
                </BrowserDetector>
            </div>
        ) : null
    }
}