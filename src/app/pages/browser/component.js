import React from 'react';

class Browser extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.setState({
            // iframeUrl: 'http://127.0.0.1:8080'
            iframeUrl: 'http://hydraui-webapp.azurewebsites.net/journeys'
            // iframeUrl: 'https://www.facebook.com/'
        })
    }
    render() {
        return this.state ? (
            <div className='page'>
                {/* <h1>{this.props.title}</h1> */}
                <input value={this.state.iframeUrl} onChange={(e) => this.setIframeUrl(e.target.value)}/>
                <iframe src={this.state.iframeUrl}
                    onLoad="alert(this.contentWindow.location);"
                    style={{
                        position: 'absolute',
                        top: 'calc(3em + 6px)',
                        left: 0,
                        width: '100vw',
                        height: 'calc(100vh - 3em - 6px)',
                        border: 'none'
                    }}></iframe>
            </div>
        ) : null
    }
    setIframeUrl(iframeUrl) {
        this.setState({
            ...this.state,
            iframeUrl
        }, () => console.log(this.state))
    }
}

export default Browser;