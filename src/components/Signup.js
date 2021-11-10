import React, { useRef, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { signup, useAuth } from '../firebase';
import './Signin.css'
const SignUp = () => {
    const navigate = useNavigate()
    const [ loading, setLoading ] = useState(false);
    const currentUser = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSignup() {
        setLoading(true);
        // try {
        await signup(emailRef.current.value, passwordRef.current.value);
        // } catch {
        // alert("Error!");
        // }
        setLoading(false);
        navigate('/home')
    }
  
    return (
        <div className="signin">
            <form action="">
                <h1>Sign Up</h1>
                <input ref={emailRef} type="email" />
                <input ref={passwordRef} type="password" />
                <button disabled={ loading || currentUser } onClick={handleSignup}>{loading ? <span>Please Wait...</span> : <span> Sign UP</span>}</button>
                <h6>ALready have an account? <Link to="/" className="signin__link">Login</Link></h6>
            </form>
        </div>
    )
}

export default SignUp
