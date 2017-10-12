import React from 'react';
import Map from '../../containers/map';
import { Search } from 'bilo-ui';
import Button from 'bilo-ui/dist';

require('./style.scss');

export class Ryda extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let start = this.props.searchSelections.start;
        let end = this.props.searchSelections.end;
        return (
            <div className='page'>
                <div className='ryda-layout'>
                    <div className='side'>
                        <Search
                            tag={'start'}
                            placeholder='starting point...'
                            search={this.props.searchPlaces}
                            suggestionsOn={true}
                            suggestions={this.props.searchResults.start}
                            select={this.props.selectPlace}
                            selection={ start ? start.formatted_address : null}/>

                        <Search
                            tag={'end'}
                            placeholder='destination...'
                            search={this.props.searchPlaces}
                            suggestionsOn={true}
                            suggestions={this.props.searchResults.end}
                            select={this.props.selectPlace}
                            selection={end ? end.formatted_address : null} />
                        {/* <Button /> */}
                        <button style={{ width: '100%', marginTop: '1em' }}
                            onClick={() => {
                                this.props.fetchJourneys()
                            }}>
                            Find Trips
                        </button>
                    </div>
                    <div className='main'>
                        {<Map/>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Ryda;