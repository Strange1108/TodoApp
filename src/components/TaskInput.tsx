import React, { useState } from 'react'
import { useTaskContext } from '../context/TaskContext';

const TaskInput: React.FC = () => {
  const [taskText, setTaskText] = useState('');
  const { dispatch } = useTaskContext();
  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      dispatch({ type: 'ADD_TASK', payload: taskText })
      setTaskText('');
    }
  }

  return (
    <div className='task' role="form" aria-label="Add a new task">
      <input
        type='text'
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder='Enter a task'
        className='task-input'
        aria-label="New task input"
      />

      <button onClick={handleAddTask} 
        className={`add-task ${taskText.trim() === '' ? 'not-allowed' : 'allowed'}`}
        disabled={taskText.trim() === ''}>
          Add Task
      </button>
    </div>
  );
};

export default TaskInput
