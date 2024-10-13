import React from 'react'
import { useTaskContext } from '../context/TaskContext'

const FilterControl: React.FC = () => {
  const { state, dispatch } = useTaskContext();
  return (
    <div className='filter-control' role="group" aria-label="Task filters">
      <h1 className="heading">Today</h1>
      <div className="search" aria-label="Search tasks">
        <div className="searchbar">
          <div className="search-icon" role="img" aria-label="Search icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type='text'
            value={state.searchTerm}
            onChange={(e) => dispatch({ type: 'SET_SEARCH_TERM', payload: e.target.value })}
            placeholder="Search"
            className='search-input'
            aria-label="Search tasks"
          />
        </div>
      </div>

      <div className='flex flex-row md:justify-between gap-2' role="group" aria-label="Filter buttons">
        <button 
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}
          className={`filter-button ${state.filter === 'all' ? 'bg-5' : 'bg-4'
          }`}
          aria-pressed={state.filter === 'all'}
        >
          All
        </button>

        <button 
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'completed' })}
          className={`filter-button ${state.filter === 'completed' ? 'bg-5' : 'bg-4'
          }`}
          aria-pressed={state.filter === 'completed'}
        >
          Completed
        </button>

        <button 
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'incomplete' })}
          className={`filter-button ${state.filter === 'incomplete' ? 'bg-5' : 'bg-4'
          }`}
          aria-pressed={state.filter === 'incomplete'}
        >
          Incomplete
        </button>
      </div>

    </div>
  )
}

export default FilterControl
