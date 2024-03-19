import { useState } from 'react';
function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState('');

   function addTask () {
    if (inputTask.trim() !== '') {
      setTasks([...tasks, inputTask]);
      setInputTask('');
    } else {
      alert('Please enter a task!');
    }
  }

  function removeTask (index) {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  return (
    <div className='border-solid border-4 border-white-600 flex-col m-20 '>
      <h1 className='py-5'>To-Do List</h1>
      <input
      className='bg-transparent'
        type="text"
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
        placeholder="Enter your task..."
      />
      <button  onClick={addTask} className='p-10 hover:text-orange-600'>Add Task</button>
      <ul>
        {tasks.map((tasks, index) => (
          <li key={index} onClick={() => removeTask(index)} className='mb-2'>
            {[...tasks]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
