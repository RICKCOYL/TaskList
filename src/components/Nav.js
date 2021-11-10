import React from 'react'
import {  useAuth  } from '../firebase';
import { Link } from 'react-router-dom'

const Nav = () => {
    const auth = useAuth();
    return (
        <nav>
            <h1>TODO LIST</h1>
            <Link to="/home">Todos</Link>
            { auth ?
            null : <Link to="/">Sign In</Link>}

        </nav>
    )
}

export default Nav
