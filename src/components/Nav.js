import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({user}) => {
    return (
        <nav>
            <h1>TODO LIST</h1>
            <Link to="/home">Todos</Link>
            { user ?
            null : <Link to="/">Sign In</Link>}

        </nav>
    )
}

export default Nav
