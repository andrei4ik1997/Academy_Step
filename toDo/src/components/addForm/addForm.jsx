import React, { useState } from "react";
import "./addForm.css";

function AddForm({ addTask }) {
  const [imputValue, setImputValue] = useState("");

  const handeInputValue = (event) => {
    setImputValue(event.target.value);
  };

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        addTask(imputValue);
        setImputValue("");
      }}
    >
      <input
        className="form__input"
        type="text"
        placeholder="New todo"
        value={imputValue}
        onChange={handeInputValue}
      ></input>

      <button className="form__button">Добавить</button>
    </form>
  );
}

export default AddForm;
