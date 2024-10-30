import React, { useState, useEffect } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import "./todo.css";
function Todo() {
  const [todos, setTodos] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addTodos = () => {
    let updatedList = [...todoList, todos]
    setTodoList(updatedList);
    localStorage.setItem("todoList", JSON.stringify(updatedList));
  };



  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("todoList")) || [];
    
    console.log(items, "item");

    if (items.length) { // lenth use cheste list unte update aytailekunte ledu
         
      setTodoList(items);
    }
 
  }, []);

  console.log(todoList)
  //     const getStorageValue = () => {
  // const dataSaved = localStorage.getItem("todoList")
  //     const initialValue = JSON.parse(dataSaved);
  //     console.log(initialValue,"ini")
  //     return initialValue || "";
  //     }
  //     console.log(getStorageValue())

  const handleDelete = (index) => {
    // same way ikkada kuda add lo laga
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
            onChange={(e) => {
              setTodos(e.target.value);
            }}
          />
          <button className="add-button" onClick={addTodos}>
            <FaPlusSquare />
          </button>
        </div>
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
export default Todo;
