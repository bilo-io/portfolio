import React, { Component } from 'react'
import {Button, Icon, Loader, LoaderType} from 'bilo-ui';

export default class Inputs extends Component {
    render() {
        return (
            <div className='ws-card'>
                <h2>Inputs</h2>
                <div>
                    <label>text</label>
                    <input type='text' />
                </div>

                <div>
                    <label>date</label>
                    <input type='date' />
                </div>

                <div>
                    <label>time</label>
                    <input type='time' />
                </div>

                <div>
                    <label>datetime</label>
                    <input type='datetime-local' />
                </div>

                <div>
                    <label>color</label>
                    <input type='color' />
                </div>
                
                <div>
                    <label>range</label>
                    <input type='range' />
                </div>

                <div>
                    <label>checkboxes</label>
                    <input type='checkbox' />
                    <input type='checkbox' />
                    <input type='checkbox' />
                </div>

                <div>
                    <label>radio buttons</label>
                    <input type='radio' />
                    <input type='radio' />
                    <input type='radio' />
                </div>
            </div>
        )
    }
}