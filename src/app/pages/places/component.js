import React from 'react';
import Map from '../../containers/map';
import { Search } from 'bilo-ui';
import { setCookie, getCookie, getCookies } from '../../../utils/webx';

require('./style.scss');

export class Places extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        setCookie('bilo.lwabona', 'This is a cookie test!');
        let cookieName = 'bilo.lwabona';
        let cookie = getCookie(cookieName);
        console.log(cookieName, { cookie })
        let cookies = getCookies();
        console.log({ cookies });
    }
    render() {
        return (
            <div className='page page-padded'>
                <h1>Places</h1>
                <div className='side'>
                    <Search
                        tag='place'
                        placeholder='search...'
                        search={this.props.searchPlaces}
                        suggestionsOn={true}
                        suggestions={this.props.searchResults.place}
                        select={this.props.selectPlace}/>
                </div>
                <div className='main'>
                    {<Map />}
                </div>
            </div>
        )
    }
    onSearchChange(tag, searchState) {

    }
}

export default Places;