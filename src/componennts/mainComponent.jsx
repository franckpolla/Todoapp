import React, { useState } from "react";
import Header from "./header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { addTask, removeTask, updateTask } from "./createSlice";
import { useSelector, useDispatch } from "react-redux";
import "C:/Users/usr186/Desktop/todoapp/src/componennts/mainComponent.css";

function MainComponent() {
  const tasks = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask === "") {
      alert("Please enter a valid task!");
      return;
    }
    if (editTaskId !== null) {
      // Dispatch the updateTask action with the modified task
      dispatch(updateTask({ _id: editTaskId, task: newTask }));
      setEditTaskId(null); // Clear edit mode
    } else {
      // Dispatch the addTask action with the entered task
      dispatch(addTask({ _id: tasks.length + 1, task: newTask }));
    }
    // Clear the input field after adding/updating the task
    setNewTask("");
  };

  const handleDelete = (taskId) => {
    dispatch(removeTask(taskId));
  };

  const handleUpdate = (taskId) => {
    // Set the initial value of the newTask to the task content
    setNewTask(tasks.find((task) => task._id === taskId).task);
    setEditTaskId(taskId);
  };

  return (
    <div id="Container">
      <div className="subContainer">
        <Header />
        <div className="addTask">
          <input
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
            type="text"
            className="inputTask"
            placeholder="Add a task"
          />
          <button onClick={handleSubmit} className="Btn">
            {editTaskId !== null ? "Save Update" : "Add Task"}
          </button>
        </div>
        <div className="newTaskContainer">
          {tasks.map((task) => (
            <div className="newtask" key={task._id}>
              <h2>{task.task}</h2>
              <div className="btns">
                <button onClick={() => handleUpdate(task._id)} className="btnn">
                  Update
                </button>
                <button
                  onClick={() => handleDelete(task._id)}
                  className="btnn1"
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
