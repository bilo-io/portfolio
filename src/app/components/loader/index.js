import React from 'react'
import './style.scss';
export default class Loader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let loaderType = this.props.type || LoaderType.SPINNER;
        let loading = this.props.loading;
        switch (loaderType) {
            case LoaderType.SPINNER:
                return (
                    <div id="preloader">
                        <div id="loader"></div>
                    </div>
                )
            case LoaderType.RAINBOW:
                return (
                    <div class="bar-loader">
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                        <div class="bar4"></div>
                        <div class="bar5"></div>
                        <div class="bar6"></div>
                    </div>
                )
            default:
                return (
                    <div>Loading...</div>
                )
        }
    }
}
export const LoaderType = {
    SPINNER: "spinner",
    RAINBOW: "rainbow"
}