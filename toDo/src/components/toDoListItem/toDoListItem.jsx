import React, { useState } from "react";
import "./toDoListItem.css";

function ToDoListItem({ id, innerText, deleteTask, editTask,toggleFinish,isFinish }) {
  const [editForm, setEditForm] = useState(false);
  const [editValue, setEditValue] = useState("");
  /* const [finishTask, setFinishTask] = useState(false); */

  const handeInputValue = (event) => {
    setEditValue(event.target.value);
  };

  const toogleEditForm = () => {
    setEditForm(!editForm);
  };


  const isFinishTask = isFinish ? "item item_finish" : "item"; 

  if (editForm) {
    return (
      <form
        className="list__item"
        onSubmit={(event) => {
          event.preventDefault();
          editTask(id, editValue || innerText,isFinish);
        }}
      >
        <input
          className="list__item_input"
          type="text"
          defaultValue={innerText}
          onChange={handeInputValue}
        ></input>
        <button>Save</button>
      </form>
    );
  } else {
    return (
      <div className="list__item">
        <div className={isFinishTask}>{innerText}</div>
        <input
          className="item__checkbox"
          onClick={()=>{
    /*         toogleFinishTask(); */
            toggleFinish(id,innerText)
          }}
          type="checkbox"
          defaultChecked = {isFinish}
        ></input>
        <button className="item__icon" onClick={() => deleteTask(id)}>
          <i className="fas fa-trash"></i>
        </button>
        <button className="item__icon" onClick={toogleEditForm}>
          <i className="far fa-edit"></i>
        </button>
      </div>
    );
  }
}

export default ToDoListItem;
