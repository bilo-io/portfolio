## BrowserDetector

### Dependencies:
|package|description|
|:-|:-|
|[`detect-browser`]()|determines which browser & version is being used|
|[`semver-compare`]()|compares strings of semantic version numbers|

This component displays a message, if the current browser is not supported.
This is determined using a list of supportedBrowsers ( a javascript object).
Supported Browsers are specified as an Object to the `list` prop of `<BrowserDetector list={supporedBrowsers}>`
### Logic 

If the current browser does not appear in this list, display the "unsupported browser message".

If the current browser is in the list, but it's version is less then the `minVersion` in the respective node, display the "unsupported browser message".

Otherwise, the browser is supported and nothing is displayed.

### Usage
#### Basic:
```jsx
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

render() {
    return (
    //...
        <BrowserSupport list={supportedBrowsers}/>
    //...
    )
}
```

### Custom

You can apply your own `style`, `className` & `children` as props to the component, and it will use those in place of the defaults.

You can also extract the name & version of the current browser, using the function `onSupportCheck`.
```jsx

render() {
    return this.state ? (
        <div>
        {/* With Custom Content */}
        <BrowserDetector
            supportedBrowsers={supportedBrowsers}
            onSupportCheck={this.onSupportCheck}
            className='custom-warning-style'
            style={inlineWarningStyle}
        />


        {/* With Custom Content & Browser Version, etc. */}
        <BrowserDetector
            supportedBrowsers={supportedBrowsers}
            onSupportCheck={this.onSupportCheck}>
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
```

> NOTE: If you are using chrome, you can test this with the [User-Agent Switcher for Chrome](https://chrome.google.com/webstore/search/user%20agent%20switcher) extension.

