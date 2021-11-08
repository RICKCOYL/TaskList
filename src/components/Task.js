/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState}from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

export default function Task({ task, handleRemove,user }) {
  const {
    title
  } = task;


  return (
    <Card className="container card mb-3">
      <Card.Body className="d-flex flex flex-sm-column justify-content-between align-items-center">
        <div className="d-flex ixed-width">
          <span className="header">{title}</span>
          

             <button
              href="#"
              className="btn-danger"
              onClick={(e) => {
                handleRemove(e, task);
              }}
              disabled={user === null} 
            >
              Remove
            </button> 
          </div>
        
      </Card.Body>
    </Card>
  );
}

Task.defaultProps = {
  book: {},
};

Task.propTypes = {
  Task: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,

  }),
  handleRemove: PropTypes.func.isRequired,
};
