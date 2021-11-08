import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

function TaskForm({ createBook, user }) {
  const [values, setValues] = useState({
    id: '',
    title: '',
  });

  const [disableButton, setDisableButton] = useState(true)

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title} = values;

    createBook({
      id: Math.floor(Math.random() * 1111).toString(),
      title,
    });

    setValues({
      id: '',
      title: '',
    });
  };

  return (
    <div>
      <h3 className="App">Add New Task</h3>
      <Form onSubmit={handleSubmit} className="d-flex justify-content-center">

     { user ? <div>
          <input type="input" disabled={user === null}  className="title-input" name="title" id="title" placeholder="enter book name" value={values.title} onChange={handleChange} />
       
        
          <Button className="Submit" type="submit" disabled={user === null} >Submit</Button>
        </div> : null}
      </Form>
    </div>
  );
}

TaskForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, { createBook })(TaskForm);
