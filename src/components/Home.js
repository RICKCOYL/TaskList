import React from 'react'
import { auth } from '../firebase'
import {Link} from 'react-router-dom'
import TaskForm from '../containers/TaskForm';
import TasksList from '../containers/TasksList';


const Home = ({user}) => {
    return (
        <div>
            <h1>Welcome home</h1>
            { user ?
            <button disabled={user === null} onClick={() => auth.signOut()}>Sign out</button>
            
            : <p>Please <Link to="/"> sign in </Link> To Add or Delete tasks</p>}
           <TaskForm user={user} />
            <TasksList user={user} />
        </div>
    )
}

export default Home
