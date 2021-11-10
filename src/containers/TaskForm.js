import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createTask} from '../actions/index'
import { useAuth  } from '../firebase';

const TaskForm = ({loading}) => {
   const currentUser = useAuth();
  const [task, setTask] = useState({
    id: null,
    title: "",
  })
  console.log(task)
  const dispatch = useDispatch()
  const handleChange = () => {
   dispatch(createTask(task))
  }
 
  const handleSubmit = (e) => {
    e.preventDefault()
    handleChange()
    setTask('')
  }

  return (
    <div>

    {currentUser ? <form onSubmit={handleSubmit} className="d-flex justify-content-center my-5 input-group">
      <input type="text" value={task.title} onChange={e => setTask({ 
        id: Math.floor(Math.random() * 1111).toString(),
        title: e.target.value })} />
      <button type="submit" className="btn btn-primary">Add</button>
      </form> : null}
    </div>
  )
}

export default TaskForm
