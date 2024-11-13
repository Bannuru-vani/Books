import React, { useState, useEffect } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { MdDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import "./todo.css";
import axios from "axios";
function Todo() {
  const [todos, setTodos] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [error, setError] = useState("");
  const [editinitaltodo, setEditInitialtodo] = useState("");
  useEffect(() => {
    fetchTodos();
  }, []);
  const fetchTodos = async () => {
    let url = "https://blogs-k8y2.onrender.com/api/v1/todo/all";
    try {
      let data = await axios.get(url);
      console.log(data, "get");
      setTodoList(data.data.todos);
    } catch (err) {
      console.log(err);
      // setError(err)
    }
  };
  const handleChange = (e) => {
    setTodos(e.target.value);

    if (e.target.value.length >= 1) {
      setError(false);
    }
  };
  const addTodos = async () => {
    debugger;
    try {
      // if (todos === "") {
      //   // setError(!error);
      //   return;
      // }
      let data = await axios.post(
        "https://blogs-k8y2.onrender.com/api/v1/todo/create",
        {
          task: todos,
          priority: "high",
        }
      );
      if (data.status === 201) {
        toast.success("Todo has been created");
        setTodos("");
      }
      fetchTodos();

      console.log(data, "stt");
    } catch (err) {
      console.log(err.response.data.message, "dd");
      setError(err.response.data.message);
    }

    //   let updatedList = [...todoList, todos]
    //   setTodoList(updatedList);
    //   localStorage.setItem("todoList", JSON.stringify(updatedList));
  };

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("todoList")) || [];

  //   console.log(items, "item");

  //   if (items.length) {
  //     // lenth use cheste list unte update aytailekunte ledu

  //     setTodoList(items);
  //   }
  //   // items [] vastadi
  //   // if([]) // true ne iostadi
  //   // sorry
  // }, []);

  console.log(todoList);
  //     const getStorageValue = () => {
  // const dataSaved = localStorage.getItem("todoList")
  //     const initialValue = JSON.parse(dataSaved);
  //     console.log(initialValue,"ini")
  //     return initialValue || "";
  //     }
  //     console.log(getStorageValue())

  const handleDelete = async (id) => {
    // same way ikkada kuda add lo laga
    let deleteUrl = `https://blogs-k8y2.onrender.com/api/v1/todo/${id}`;

    // setTodoList(todoList.filter((_, id) => id !== index));
    let data = await axios.delete(deleteUrl);
    console.log(data, deleteUrl, "delete");
    fetchTodos();
  };
  const editTodo = (item) => {
    debugger;
    console.log(item, "edit");
    setEdit(true);
    setEditInitialtodo(item.task);

    // let editUrl = `https://blogs-k8y2.onrender.com/api/v1/todo/${item._id}`;
    // let data = await axios.post(editUrl);
    // fetchTodos();
  };
  const updateTodo = async (item) => {
    // setEditInitialtodo(item.task);
    try {
      let editUrl = `https://blogs-k8y2.onrender.com/api/v1/todo/${item._id}`;
      console.log(editUrl);
      let data = await axios.put(editUrl, {
        task: editinitaltodo,
        priority: "low",
        completed: true,
      });
      console.log(data, "up");
      fetchTodos();
      setEdit(false);
    } catch (err) {
      console.log(err);
    }
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
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
        ></ToastContainer>
        <p style={{ color: "red", textAlign: "center" }}>{error}</p>
        {todoList.map((item, index) => (
          <div key={index} className="todo-item">
            <p className="todo-text">{item.task}</p>
            <div>
              <button
                className="delete-button"
                onClick={() => handleDelete(item._id)}
              >
                <MdDeleteOutline />
              </button>
            </div>
            <div>
              <button className="delete-button" onClick={() => editTodo(item)}>
                <MdOutlineModeEdit />
              </button>
            </div>
            <div>
              {edit ? (
                <div id="myModal" class="modal">
                  <div class="modal-content">
                    <input
                      value={editinitaltodo}
                      onChange={(e) => setEditInitialtodo(e.target.value)}
                    />
                    <button onClick={() => updateTodo(item)}>Update</button>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Todo;
