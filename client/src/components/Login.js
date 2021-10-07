import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {

    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        //firebase login stuff
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        //firebase register stuff
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //successfully created a new user
                console.log(auth);
                //send user to homepage after registering
                if(auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img 
                    className='login__logo'
                    src='http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt='amazon__logo'
                />
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                        type='text' 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input 
                        type='password' 
                        value={password} 
                        onChange={e =>setPassword(e.target.value)}
                    />

                    <button type='submit' className='login__singInButton' onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale.  Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    <small className='login__smallDisclaimer'>This is a clone of the real Amazon site.  It is not the real AMAZON</small>
                </p>
                <button className='login__registerButton' onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;
