import React, { Component, PropTypes } from 'react';
import { Icon } from 'bilo-ui'
import User from '../../components/user'
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
            user: undefined
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
        console.log('auth: github')
        firebase.auth().signInWithPopup(providerGithub).then((result) => {
            this.setUser(result.additionalUserInfo)
        }).catch((error) => {
            console.log('Error signing in: ', error)
        })
    }
    signInWithGoogle() {
        console.log('auth: google')
        firebase.auth().signInWithPopup(providerGoogle).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            console.log(result, token)
            }).catch((error) => {
              console.log()
          });
    }

    setUser(user) {
        console.log(user)
        this.setState({
            ...this.state,
            user: {
                username: user.username,
                fullname: user.profile.name,
                avatarUrl: user.profile.avatar_url
            }
        }, () => { console.log(this.state) })
    }

    //#endregion
    render() {
        let signInOptions = [
            <div key='github_auth' className='signin-button' onClick={() => { this.signInWithGithub() }}>
                <Icon name='github' style={{marginRight: '1em'}}/>
                <span>Sign in with Github</span>
            </div>,
            <div key='google_auth' className='signin-button' onClick={() => { this.signInWithGoogle() }}>
                <Icon name='google' style={{marginRight: '1em'}}/>
                <span>Sign in with Google</span>
            </div>
        ]

        let users = [{
                username: 'Lutando',
                fullname: 'Lutando Ngqakaza',
                avatarUrl: 'https://avatars1.githubusercontent.com/u/1838141?s=460&v=4'
            },{
                username: 'henk',
                fullname: '',
                avatarUrl: 'https://avatars2.githubusercontent.com/u/13061442?s=460&v=4'
            },{
                username: 'circlingthesun',
                fullname: 'Rickert Mulder',
                avatarUrl: 'https://avatars0.githubusercontent.com/u/1028632?s=460&v=4'
            }
        ]
        return (
            <div className='page page-padded'>
                <h1>Firebase</h1>
                {this.user
                    ? null
                    : signInOptions
                }
                {users.map( (user) => {
                    return <User key={user.username} user={user} />
                })}
                {this.state && this.state.user ? (
                    <User user={this.state.user} />
                ):null}
            </div>
        )
    }
}