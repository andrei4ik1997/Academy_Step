import ToDoListItem from "../toDoListItem";
import "./toDoList.css";

function ToDoList({ tasks, deleteTask, editTask,toggleFinish }) {
  return (
    <div className="list">
      {tasks.map((item) => (
        <ToDoListItem
          key={item.id}
          id={item.id}
          innerText={item.task}
          deleteTask={deleteTask}
          editTask={editTask}
          toggleFinish={toggleFinish}
          isFinish ={item.isFinish}
        ></ToDoListItem>
      ))}
    </div>
  );
}

export default ToDoList;
