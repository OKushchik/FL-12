import React from "react";
import { addTodo } from "../actions/todo.actions";
import { connect } from "react-redux";


const AddTodo = ({ dispatch }) => {
  let input;
  let onClick = () => {
    if (input.value !== "") {
        dispatch(addTodo(input.value, document.getElementsByClassName('data')[0].value));
        input.value = '';
        document.getElementsByClassName('data')[0].value = '';
    }
  };
  return (
    <React.Fragment>
      <input className='data' type='date' />
      <input type="text" ref={node => (input = node)} />
      <button type="submit" onClick={onClick}>
        Add Todo
      </button>
    </React.Fragment>
  );
};

export default connect()(AddTodo);
