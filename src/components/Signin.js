import React, { useRef, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {  login,useAuth  } from '../firebase';
import './Signin.css'
const Signin = ({user}) => {
    const currentUser = useAuth();
    console.log(currentUser)
    const navigate = useNavigate()
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [ loading, setLoading ] = useState(false);


    async function handleLogin() {
        setLoading(true);
        try {
        await login(emailRef.current.value, passwordRef.current.value);
        navigate('/home')
        } catch {
        alert("Error!");
        }
        setLoading(false);
        
  }
   
 
    return (
        <div className="signin">
            <form action="">
                <h1>Log in</h1>
                <input ref={emailRef} type="email" />
                <input ref={passwordRef} type="password" />
                <button disabled={ loading || currentUser } onClick={handleLogin}>{loading ? <span>Please Wait...</span> : <span> Login</span>}</button>
                <h6>Not yet register? <Link to="/signup" className="signin__link">Sign up</Link></h6>
            </form>
        </div>
    )
}

export default Signin
