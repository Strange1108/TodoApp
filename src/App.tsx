import React, { Suspense } from 'react';
import { TaskProvider } from "./context/TaskContext";


const FilterControl = React.lazy(() => import('./components/FilterControl'));
const TaskInput = React.lazy(() => import('./components/TaskInput'));
const TaskList = React.lazy(() => import('./components/TaskList'));

function App() {
  return (
    <TaskProvider >
      <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <FilterControl />
        <TaskList />
        <TaskInput />
      </Suspense>

      </div>
    </TaskProvider>
  );
}

export default App;
