/* eslint-disable no-console */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Task from '../components/Task';
import {removeBook} from '../actions/index';

function TasksList({ tasks,user}) {

  const Tasks = useSelector(state => state.Tasks)
  const dispatch = useDispatch();
  const handleRemoveTask = (e, book) => {
    e.preventDefault();
   dispatch( removeBook(book.id));
  };

  return (
    <div className="book-list">
    <h2>TASKS</h2>
      <div className="">
        {Tasks === undefined || null ? 'Loading' : Tasks.map((task) => (
          <Task  user={user} task={task} key={task.id} handleRemove={handleRemoveTask} />
        ))}
      </div>
    </div>
  );
}

export default TasksList;

TasksList.defaultProps = {
  tasks: [],
};

TasksList.propTypes = {
  tasks: PropTypes.oneOfType([PropTypes.array]),
  removeBook: PropTypes.func,
};
