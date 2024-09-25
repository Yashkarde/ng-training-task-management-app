// src/components/TaskRow.js
import React from 'react';

const TaskRow = ({ task, onEdit, onDelete }) => {
  return (
    <tr>
      <td>
        <a href="#">{task.assignedTo}</a>
      </td>
      <td>{task.status}</td>
      <td>{task.dueDate}</td>
      <td>{task.priority}</td>
      <td>{task.comments}</td>
      <td>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TaskRow;
