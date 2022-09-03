import React, {useState} from "react";
import {useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";

import "../App.css";

function Todo() {
const [inputData, setInputData] = useState('');
const list = useSelector((state)=> state.todoReducers.list);
const dispatch = useDispatch();
  return (
    <div className="main-div">
      <div className="child-div">
        <h1>  TO DO LIST </h1>
          <h2> Add your list here </h2>
      
        <div className="addItems">
          <input type="text" placeholder=" write something here"
          value= {inputData}
          onChange= {(event) => setInputData(event.target.value)}
          />
          <i className="bi bi-journal-plus" title="Add Item"
          onClick={() => dispatch(addTodo(inputData), setInputData(''))}
          > + </i>
        </div>

<div className="showItems">
{
list.map((elem) => {
  return(
<div className="eachItem" key={elem.id}>
    <h3>{elem.data}</h3>
    <div className="todo-btn">
    <i className="bi bi-journal-x" title="Delete Item"
          onClick={() => dispatch(deleteTodo(elem.id))}
          >  </i>
          </div>
  </div>
  )
})
}
</div>
<div className= "showItems">
  <button className="btn-effect84" data-sm-link-text="remove All"
  onClick={() => dispatch(removeTodo())}
  > <span> Check List </span></button>
</div>

      </div>


    </div>
  );
}

export default Todo;
