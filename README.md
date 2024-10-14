# Task Management App
This is a Task Management App built using React, TypeScript and styled with Tailwind CSS. It allows users to manage their tasks efficiently with features such as adding tasks, marking tasks as complete, filtering tasks, searching tasks, and saving tasks to local storage for persistence.

# Performance

## Lighthouse Performance Report
<p align="between">
  <img src="https://github.com/user-attachments/assets/7a02dca7-377b-4fca-a2df-f0d9c43b077c" alt="Image 1" width="45%" height="295px"/>
  <img src="https://github.com/user-attachments/assets/f351ff8a-7603-4106-8708-4a1f4173cc82" alt="Image 2" width="45%" height="295px"/>
</p>



The Lighthouse report provides insights into the performance, accessibility, and best practices of the application. Make sure to review the report for optimization opportunities.


## Features

- **Add Task**: Users can add tasks to the list.
- **Mark Task as Complete**: Users can mark tasks as complete/incomplete.
- **Delete Task**: Users can remove tasks from the list.
- **Filter Tasks**: Allows filtering tasks by:
  - All
  - Completed
  - Incomplete
- **Search with Debounce**: Users can search tasks with a debounce to avoid unnecessary re-renders.
- **Basic Form Validation**: Prevents adding empty tasks.
- **Responsive Design**: Optimized layout for both desktop and mobile devices.
- **Local Storage**: Tasks are saved to the browser’s local storage, so they persist across page reloads.

## Tech Stack

- **Vite**: Fast bundling and development server.
- **React**: Library for building the UI components.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TypeScript**: Type-safe JavaScript for improved development experience.
- **React Context API**: For managing global state.
- **Local Storage**: To store tasks persistently in the browser.
- **SWC (Speedy Web Compiler)**: For faster builds and performance.

## Project Structure

```bash
├── public/             # Static assets (e.g., images, icons)
├── src/
│   ├── components/     # React components (TaskList, TaskItem, etc.)
│   ├── hooks/          # Custom React hooks
│   ├── context/        # React Context API setup for global state
│   ├── styles/         # Global styles and Tailwind CSS setup
│   ├── utils/          # Helper functions (e.g., debounce, validation)
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global CSS file with Tailwind imports
├── package.json        # Project dependencies and scripts
└── tailwind.config.js  # Tailwind CSS configuration
```

## Installation and Setup

### Clone the repository:

```bash
git clone https://github.com/Strange1108/TodoApp
```

### Navigate to the project directory:

```bash
cd TodoApp
```
### Install dependencies:
Make sure you have Node.js installed, then run:

```bash
npm install
```
### Start the development server:
```bash
npm run dev
```
This will start the app on http://localhost:5173

### Build the app for production:
To create an optimized production build:

```bash
npm run build
```
The output will be in the dist/ folder.

# How to Use

## Adding a Task
1. Type a task description in the input field.
2. Click the "Add Task" button to add the task to your list.

## Marking a Task as Completed
- Click on the checkbox next to a task to toggle its status between complete and incomplete.

## Deleting a Task
- Click on the "X" icon next to a task to delete it from your list.

## Filtering Tasks
- Use the "All", "Completed", or "Incomplete" filters to view tasks based on their status.

## Searching Tasks
- Use the search bar to filter tasks by typing relevant keywords.

# Screenshots

## Desktop View
![image](https://github.com/user-attachments/assets/82d7c2d0-36e7-42f3-aae5-d38b3e1dbaf9)

## Mobile View
![image](https://github.com/user-attachments/assets/33bb7ee4-2f79-49d0-92c8-18b6e379acdf)







