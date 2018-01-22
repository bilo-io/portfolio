import React, { Component } from 'react'

export default class Media extends Component {
    render() {
        return (
            <div className='ws-card'>
                <h2>Media</h2>
                <div>
                    <div>audio</div>
                    <audio controls>
                        <source src="https://www.w3schools.com/html/horse.ogg" />
                    </audio>
                </div>

                <div>
                    <div>video</div>
                    <video width="320" height="240" controls>
                        <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        )
    }
}