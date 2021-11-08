import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <h1>TODO LIST</h1>
            <Link to="/home">Todos</Link>
            <Link to="/">Sign In</Link>

        </nav>
    )
}

export default Nav
