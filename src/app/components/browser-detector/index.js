import React, { Component, PropTypes } from 'react';
const { detect } = require('detect-browser');
// const cmp = require('semver-compare');
import cmp from 'semver-compare';
import './style.scss';

export const initialState = () => {
    return {
        browser: detect(),
        message: '',
        supported: true,
    }
}

export default class BrowserDetector extends Component {
    componentDidMount() {
        this.setState({
            browser: {},
            message: '',
            supported: true,
        })
        const browser = detect();
        this.determineBrowserSupport(browser);
    }
    render() {
        let { children, className, style } = this.props;

        return this.state && !this.state.supported ? (

            <div
                className={className || 'warning-callout'}
                style={style || {}}>
                {children ? children : (
                    <div>{this.state.message}</div>
                )}
            </div>

        ) : null
    }
    determineBrowserSupport(browser) {
        let { supportedBrowsers } = this.props;
        console.log({supportedBrowsers});
        if (!browser) {
            console.log('could not detect browser');
        }
        else {
            if (!supportedBrowsers[browser.name]) {
                this.setAsUnsupported(browser);
            } else {
                let currentBrowser = supportedBrowsers[browser.name];
                if (cmp(browser.version, currentBrowser.minVersion) < 0) {
                    this.setAsUnsupported(browser);
                } else {
                    this.setAsSupported(browser);
                }
            }
        }
    }
    setAsUnsupported(browser) {
        this.setState({
            browser,
            supported: false,
            message: `${browser.name} version ${browser.version} is not currently supported.`,
        }, () => console.log(this.state))
    }
    setAsSupported(browser) {
        this.setState({
            browser,
            supported: true,
            message: `${browser.name} version ${browser.version} is supported`
        }, () => console.log(this.state))
    }
}

BrowserDetector.PropTypes = {
    list: PropTypes.array.isRequired,
}