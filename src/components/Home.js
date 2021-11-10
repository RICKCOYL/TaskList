import React, {useState,useEffect} from 'react';
import {logout, useAuth }from '../firebase'
import {Link,useNavigate} from 'react-router-dom'
import TaskForm from '../containers/TaskForm';
import TasksList from '../containers/TasksList';


const Home = ({users}) => {
    const [ loading, setLoading ] = useState(false);
    const navigate = useNavigate();
    const currentUser = useAuth();

     async function handleLogout() {
            setLoading(true);
            try {
            await logout();
            } catch {
            alert("Error!");
            }
            setLoading(false);
            navigate('/');

  }

  
    return (
        <div>
            <h1>Welcome home</h1>
            { currentUser ?
            <button disabled={ loading || !currentUser } onClick={handleLogout} className="btn btn-warning">Log Out</button>
            
            : <p>Please <Link to="/"> sign in </Link> To Add or Delete tasks</p>}
           <TaskForm loading={loading} user={currentUser} />
            <TasksList user={currentUser} />
        </div>
    )
}

export default Home
