import "./toDoFilter.css";

function ToDoFilter({filterAll,filterDone,filterTodo}) {
  return (
    <div className='filter'>
      <button className='filter__button' onClick={filterAll}>All</button>
      <button className='filter__button' onClick={filterDone}>Done</button>
      <button className='filter__button' onClick={filterTodo}>Todo</button>
    </div>
  );
}

export default ToDoFilter;
