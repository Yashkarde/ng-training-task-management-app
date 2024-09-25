import React, { useState, useEffect } from 'react';

const EditTaskModal = ({ isOpen, onClose, onEdit, task }) => {
  const [formData, setFormData] = useState({ assignedTo: '', status: '', dueDate: '', priority: '', comments: '' });

  useEffect(() => {
    if (task) setFormData(task);
  }, [task]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onEdit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <h2>Edit Task</h2>

      {/* Row 1: Assigned To and Status */}
      <div className="modal-row">
        <input
          className="modal-input"
          name="assignedTo"
          value={formData.assignedTo}
          placeholder="Assigned To"
          onChange={handleChange}
        />
        <input
          className="modal-input"
          name="status"
          value={formData.status}
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
          value={formData.dueDate}
          placeholder="Due Date"
          onChange={handleChange}
        />
        <input
          className="modal-input"
          name="priority"
          value={formData.priority}
          placeholder="Priority"
          onChange={handleChange}
        />
      </div>

      {/* Textarea for comments */}
      <textarea
        className="modal-textarea"
        name="comments"
        value={formData.comments}
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

export default EditTaskModal;
