import React from 'react'
import './style.scss'

export const Progress = (props) => {
    const { label, percentage } = props
    return (
        <div>
            <label>{label}</label>
            <div className='progress-bar'>
                <span className='background'></span>
                <span className='progress' style={{width: percentage}}></span>
            </div>
            <br />
        </div>
    )
}