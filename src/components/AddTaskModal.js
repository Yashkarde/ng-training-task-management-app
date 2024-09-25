import React, { useState } from 'react';

const AddTaskModal = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({ assignedTo: '', status: '', dueDate: '', priority: '', comments: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onAdd(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <h2>Add New Task</h2>

      {/* Row 1: Assigned To and Status */}
      <div className="modal-row">
        <input
          className="modal-input"
          name="assignedTo"
          placeholder="Assigned To"
          onChange={handleChange}
        />
        <input
          className="modal-input"
          name="status"
          placeholder="Status"
          onChange={handleChange}
        />
      </div>

      {/* Row 2: Due Date and Priority */}
      <div className="modal-row">
        <input
          className="modal-input"
          name="dueDate"
          type="date"
          onChange={handleChange}
        />
        <input
          className="modal-input"
          name="priority"
          placeholder="Priority"
          onChange={handleChange}
        />
      </div>

      {/* Textarea for comments */}
      <textarea
        className="modal-textarea"
        name="comments"
        placeholder="Comments"
        onChange={handleChange}
      ></textarea>

      {/* Footer with Save and Cancel buttons */}
      <div className="modal-footer">
        <button onClick={handleSubmit}>Save</button>
        <button className="cancel-button" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};  

export default AddTaskModal;
