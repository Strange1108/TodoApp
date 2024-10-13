    import React from 'react'
    import { useTaskContext } from '../context/TaskContext'
    import useDebounce from '../hooks/useDebounce';

    const TaskList: React.FC = () => {
        const { state, dispatch } = useTaskContext();
        const debouncedSearchTerm = useDebounce(state.searchTerm, 300);

        const filterTasks = state.tasks.filter(task => {
            if (state.filter === 'completed' && !task.completed) return false;
            if (state.filter == 'incomplete' && task.completed) return false;
            if (debouncedSearchTerm && !task.text.toLowerCase().includes(debouncedSearchTerm.toLowerCase())) return false;
            return true;
        })
        return (
            <div className='w-full md:mt-10 max-md:mb-2'>
                <ul className='list-none p-0' role="list" aria-label="Task list">
                    {filterTasks.map(task => (
                        <li key={task.id} className={task.completed ? 'task-item complete' : 'task-item'}
                            aria-label={`Task: ${task.text}, Status: ${task.completed ? 'completed' : 'incomplete'}`}
                        >
                            <input type="checkbox" checked={task.completed} onChange={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
                                aria-label={`Toggle task ${task.text} completion`}
                            />
                            <span className='p-2'>{task.text}</span>
                            <button className='delete-button' onClick={() => dispatch({ type: 'DELETE_TASK', payload: task.id })}
                                aria-label={`Delete task ${task.text}`}
                            >
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    export default TaskList
