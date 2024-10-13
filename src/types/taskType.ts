export interface Task {
    id: number;
    text: string;
    completed:boolean;
}

export interface TaskState {
    tasks: Task[];
    filter: 'all' | 'completed' |'incomplete';
    searchTerm: string;
}

export interface TaskAction {
    type: string;
    payload?: any; 
}