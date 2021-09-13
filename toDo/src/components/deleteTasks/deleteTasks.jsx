import "./deleteTasks.css";

function DeleteTasks({deleteDone,deleteAll}) {
  return (
    <div className='delete'>
      <button className='delete__button' onClick={deleteDone} >Delete done tasks</button>
      <button className='delete__button' onClick={deleteAll}>Delete all tasks</button>
    </div>
  );
}

export default DeleteTasks;
