import React, { useState, useEffect } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import "./todo.css";
function TodoNew() {
  const [todos, setTodos] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState(false);
  const handleChange = (e) => {
   
    setTodos(e.target.value);

    if (e.target.value.length >= 1) {
      setError(false);
    }
  };
  const addTodos = () => {
    if (todos === "") {
      setError(!error);
      return;
    }
    let updatedList = [...todoList, todos];
    setTodoList(updatedList)
     localStorage.setItem(
      "todoList",
      JSON.stringify(updatedList)
    );
  };
  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem(todoList)) || [];
    if (getData.length) {
      setTodoList(getData);
    }
  });

  console.log(todoList);

  const handleDelete = (index) => {
    setTodoList(todoList.filter((_, id) => id !== index));
  };
  return (
    <div className="todo-container">
      <h1 className="todo-header">Todo List</h1>
      <div className="todo-items">
        <div className="todo-inputs">
          <input
            placeholder="Add Todo"
            className="add-todoinput"
            value={todos}
            onChange={(e) => handleChange(e)}
          />
          <button className="add-button" onClick={addTodos}>
            <FaPlusSquare />
          </button>
        </div>
        <p>{error ? "please add todo" : ""}</p>
        {todoList.map((item, index) => (
          <div key={index} className="todo-item">
            <p className="todo-text">{item}</p>
            <button
              className="delete-button"
              onClick={() => handleDelete(index)}>
              <MdDeleteOutline />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TodoNew;
