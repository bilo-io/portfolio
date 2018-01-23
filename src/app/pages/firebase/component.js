import React, { Component, PropTypes } from 'react';
import { Icon } from 'bilo-ui'
import firebase from 'firebase'
import './style.scss';

var providerGithub = new firebase.auth.GithubAuthProvider()
var providerGoogle = new firebase.auth.GoogleAuthProvider()

export default class Firebase extends Component {
    static propTypes = {
    }
    //#region Lifecycle
    // https://reactjs.org/docs/react-component.html#componentwillreceiveprops
    // mounting
    constructor(props) {
        super(props)
    }
    
    componentWillMount() { 
        this.setState({
            user: undefined,
            username: undefined,
            avatarUrl: undefined
        })
        this.initFirebase();
    }
    
    componentDidMount() { }
    
    initFirebase() {
        const config = {
            apiKey: "AIzaSyCANPOz-hgWOugxob78o0pOQAURNQyrats",
            authDomain: "deploy-queue.firebaseapp.com",
            databaseURL: "https://deploy-queue.firebaseio.com",
            projectId: "deploy-queue",
            storageBucket: "",
            messagingSenderId: "777160955980"    
        }    
        firebase.initializeApp(config)
    }
    signInWithGithub() {
        console.log('signing in with github')
        firebase.auth().signInWithPopup(providerGithub).then((result) => {
            // console.log('Signed in with github: ', JSON.stringify(result, true, 2), result)
            this.setUser(result.additionalUserInfo)
        }).catch((error) => {
            console.log('Error signing in: ', error)
        })
    }
    signInWithGoogle() {
        console.log('signing in with google')
        firebase.auth().signInWithPopup(providerGoogle).then( (result) => {
            this.setUser(result.additionalUserInfo)
        }).catch( (error) => {
            console.log('Error singing in: ', error)
        })
    }

    setUser(user) {
        console.log(user)
        this.setState({
            ...this.state,
            user: user,
            username: user.username,
            avatarUrl: user.profile.avatar_url
        }, () => { console.log(this.state) })
    }

    //#endregion
    render() {
        return (
            <div className='page page-padded'>
                <h1>Firebase</h1>
                <button onClick={() => { this.signInWithGithub() }}>
                    <Icon name='github' />
                </button>
                <button onClick={() => { this.signInWithGoogle() }}>
                    <Icon name='google' />
                </button>
                <br />
                <br />
                {this.state && this.state.user ? (
                    <div>
                        {this.state.username}
                        <br />
                        <img width='64px' style={{borderRadius: '50%', width: '4em', height: 'auto'}} src={this.state.avatarUrl} />
                    </div>
                ):null}
            </div>
        )
    }
}