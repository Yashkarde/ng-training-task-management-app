// src/App.js
import React from 'react';
import TaskTable from './components/TaskTable';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Task Management App</h1>
      <TaskTable />
    </div>
  );
}

export default App;
