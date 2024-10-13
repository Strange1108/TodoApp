import React, {useContext, createContext, useEffect, useReducer, ReactNode} from "react";
import { TaskAction, TaskState } from "../types/taskType";
import { getTasksFromLocalStorage, saveTasksToLocalStorage } from "../utils/localStorageHelpers";

const initialState:TaskState ={
    tasks: getTasksFromLocalStorage(),
    filter: 'all',
    searchTerm: ''
}



const TaskContext = createContext<{state: TaskState; dispatch: React.Dispatch<TaskAction>} | undefined>(undefined);
interface TaskProviderProps{
    children: ReactNode
}
const taskReducer = (state: TaskState, action: TaskAction ): TaskState =>{
    switch(action.type)
    {
        case 'ADD_TASK':
            return{
                ...state,
                tasks: [...state.tasks, {id: Date.now(), text: action.payload, completed:false}],
            };
        case 'TOGGLE_TASK':
            return{
                ...state,
                tasks: state.tasks.map(task =>  
                    task.id === action.payload ? {...task, completed: !task.completed} : task
                ),
            };
        case 'DELETE_TASK':
            return{
                ...state,
                tasks: state.tasks.filter(task => task.id != action.payload)
            };
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload
            };
        case 'SET_SEARCH_TERM':
            return{
                ...state,
                searchTerm: action.payload
            };
        default:
            return state;
    }
}

export const TaskProvider : React.FC<TaskProviderProps> = ({children}) => {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    useEffect(()=>{
        saveTasksToLocalStorage(state.tasks);
    }, [state.tasks])

    return(
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () =>{
    const context = useContext(TaskContext);
    if (!context) throw new Error('useTaskContext must be used within a TaskProvider');
    return context;
}