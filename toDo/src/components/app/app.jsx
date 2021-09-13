import React, { useState } from "react";
import Header from "../header";
import AddForm from "../addForm";
import ToDoList from "../toDoList/toDoList";
import nextId from "react-id-generator";
import ToDoFilter from "../toDoFilter";
import DeleteTasks from "../deleteTasks";
import "./app.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [visibleTasks, setVisibleTasks] = useState("");

  const addTask = (imputValue) => {
    setTasks([...tasks, { id: nextId(), task: imputValue, isFinish: false }]);
  };

  const deleteTask = (id) => {
    const index = tasks.findIndex((task) => task.id === id);
    const newArr = [...tasks.slice(0, index), ...tasks.slice(index + 1)];
    setTasks(newArr);
  };

  const editTask = (id, task,isFinish) => {
    const index = tasks.findIndex((task) => task.id === id);
    const newTask = {
      id: nextId(),
      task,
      isFinish: isFinish,
      
    };
    const newArr = [
      ...tasks.slice(0, index),
      newTask,
      ...tasks.slice(index + 1),
    ];
    setTasks(newArr);
  };

  const toggleFinish = (id,task) => {
    const index = tasks.findIndex((task) => task.id === id);
    const newTask = {
      id: nextId(),
      task,
      isFinish: !tasks[index].isFinish,
    };
    const newArr = [
      ...tasks.slice(0, index),
      newTask,
      ...tasks.slice(index + 1),
    ];
    setTasks(newArr);

  };

  const deleteDone = () => {
    const newArr = tasks.filter((task) => !task.isFinish);
    setTasks(newArr);
  };

  const deleteAll = () => {
    const newArr = [];
    setTasks(newArr);
  };

  const filterTodo = () => {
    setVisibleTasks("Todo");
  };
  const filterAll = () => {
    setVisibleTasks("All");
  };
  const filterDone = () => {
    setVisibleTasks("Done");
  };

  const filterTasks = () => {
    if (visibleTasks === "Todo") {
      return tasks.filter((task) => !task.isFinish);
    } else if (visibleTasks === "Done") {
      return tasks.filter((task) => task.isFinish);
    } else return tasks;
  };

  return (
    <div className="conatainer">
      <Header header="Todolist"></Header>
      <AddForm addTask={addTask}></AddForm>
      <Header description="My TodoList"></Header>
      <ToDoFilter
        filterTodo={filterTodo}
        filterAll={filterAll}
        filterDone={filterDone}
      ></ToDoFilter>
      <ToDoList
        tasks={filterTasks()}
        deleteTask={deleteTask}
        editTask={editTask}
        toggleFinish={toggleFinish}
      ></ToDoList>
      <DeleteTasks deleteDone={deleteDone} deleteAll={deleteAll}></DeleteTasks>
    </div>
  );
}

export default App;
