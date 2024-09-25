// src/components/TaskTable.js
import React, { useState } from 'react';
import TaskRow from './TaskRow';
import AddTaskModal from './AddTaskModal';
import EditTaskModal from './EditTaskModal';

const initialTasks = [
  { id: 1, assignedTo: 'User 1', status: 'Completed', dueDate: '12/10/2024', priority: 'Low', comments: 'This task is good' },
  { id: 2, assignedTo: 'User 2', status: 'In Progress', dueDate: '14/09/2024', priority: 'High', comments: 'This task is good' },
];

const TaskTable = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
    setAddModalOpen(false);
  };

  const handleEditTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    setEditModalOpen(false);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <button onClick={() => setAddModalOpen(true)}>New Task</button>
      <table>
        <thead>
          <tr>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Comments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <TaskRow 
              key={task.id} 
              task={task} 
              onEdit={(task) => { setCurrentTask(task); setEditModalOpen(true); }} 
              onDelete={handleDeleteTask} 
            />
          ))}
        </tbody>
      </table>
      <AddTaskModal isOpen={isAddModalOpen} onClose={() => setAddModalOpen(false)} onAdd={handleAddTask} />
      <EditTaskModal 
        isOpen={isEditModalOpen} 
        onClose={() => setEditModalOpen(false)} 
        onEdit={handleEditTask} 
        task={currentTask} 
      />
    </div>
  );
};

export default TaskTable;
