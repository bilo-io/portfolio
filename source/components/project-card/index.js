import React, { Component } from 'react'
import { Card } from 'bilo-ui';
import './style.scss'

export default class ProjectCard extends Component {
    render() {
        const { image, url, name, description } = this.props
        return (
            <Card className='project-card' onClick={this.openRepo}>
                <div className='text'>
                    {name}
                    <br />
                    <br />
                    {description}
                </div>
                <img src={image} />
            </Card>
        )
    }
    openRepo = () => {
        console.log('opening project: ', this.props.url)
        window.open(this.props.url, '_blank')
    }
}