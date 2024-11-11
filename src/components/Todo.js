import React, { useState, useEffect } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import "./todo.css";
import axios from "axios";
function Todo() {
  const [todos, setTodos] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    debugger;
    setTodos(e.target.value);

    if (e.target.value.length >= 1) {
      setError(false);
    }
  };
  const addTodos = async () => {
    if (todos === "") {
      setError(!error);
      return;
    }
    let data = await axios.post(
      "https://blogs-k8y2.onrender.com/api/v1/todo/create"
    );
    console.log(data);
    //   let updatedList = [...todoList, todos]
    //   setTodoList(updatedList);
    //   localStorage.setItem("todoList", JSON.stringify(updatedList));
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("todoList")) || [];
    debugger;
    console.log(items, "item");

    if (items.length) {
      // lenth use cheste list unte update aytailekunte ledu

      setTodoList(items);
    }
    // items [] vastadi
    // if([]) // true ne iostadi
    // sorry
  }, []);

  console.log(todoList);
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
              onClick={() => handleDelete(index)}
            >
              <MdDeleteOutline />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Todo;
