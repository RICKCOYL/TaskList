import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createTask} from '../actions/index'
import { useAuth  } from '../firebase';

const TaskForm = () => {
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
    <form onSubmit={handleSubmit} className="d-flex justify-content-center my-5 input-group">
      <input disabled={  currentUser } type="text" value={task.title} onChange={e => setTask({ 
        id: Math.floor(Math.random() * 1111).toString(),
        title: e.target.value })} />
      <button disabled={  currentUser } type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
  )
}

export default TaskForm
