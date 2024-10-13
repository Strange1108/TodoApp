import { Task } from "../types/taskType";

export const getTasksFromLocalStorage = (): Task[] =>{
    const tasks = localStorage.getItem('tasks');
    return tasks? JSON.parse(tasks): [];
};

export const saveTasksToLocalStorage = (tasks: Task[]) =>{
    localStorage.setItem('tasks', JSON.stringify(tasks));
}