import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'bilo-ui'
import tutorials from './data';
require('./style.scss');
export class Tutorials extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='page page-padded'>
                <div className='tut-content'>
                    <Input type='text' placeholder={'search...'}
                        value={this.props.query}    
                        onChange={(e) => {
                        this.props.updateQuery(e.target.value)
                        }} />
                </div>
                <div className="posts-container">
                {tutorials.filter(tut => {
                    return tut
                        .name
                        .toLowerCase()
                        .includes(this.props.query.toLowerCase())
                }).map((tut, idx) => {
                    return <TutTile key={idx} tutId={tut.id} img={tut.img}>{tut.name}</TutTile>
                        })
                }
                </div>        
            </div>
        )
    }
}

const TutTile = (props) => {
    var height = '4em';
    return props
        ? (
            <Link className='post-card' to={'/tutorials/' + props.tutId}>
                <div style={{
                    position: 'relative'
                }}>
                    <img
                        src={props.img}
                        style={{
                        display: 'inline',
                        height: height,
                        width: height
                    }}/>
                    <div className='post-title'>{props.children}</div>
                </div>
            </Link>
        )
        : null
}

const TutDoc = (props) => {
    return <div>
        
    </div>
}

export default Tutorials;