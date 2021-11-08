import React, { useRef } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { auth } from '../firebase';
import './Signin.css'
const SignUp = () => {
    const navigate = useNavigate()
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            navigate('/home')
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }
  
    return (
        <div className="signin">
            <form action="">
                <h1>Sign in</h1>
                <input ref={emailRef} type="email" />
                <input ref={passwordRef} type="password" />
                <button onClick={signUp}>Sign Up </button>
                <h6>Not yet register? <Link to="/" className="signin__link">Sign in</Link></h6>
            </form>
        </div>
    )
}

export default SignUp
