import React from 'react';

const TaskItem = ({ task, updateTask, deleteTask, toggleTaskCompletion }) => {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '1rem',
      marginBottom: '1rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Category: {task.category}</p>
      <p>Priority: {task.priority}</p>
      <p>Deadline: {task.deadline}</p>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleTaskCompletion(task.id)} 
        style={{ marginRight: '0.5rem' }}
      />
      <label style={{ marginRight: '1rem' }}>Completed</label>
      <button style={{
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        backgroundColor: '#4caf50',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        marginRight: '0.5rem',
        transition: 'background-color 0.3s ease',
      }} onClick={() => deleteTask(task.id)}>Delete</button>
      <button style={{
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        backgroundColor: '#2196f3',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      }} onClick={() => updateTask(task)}>Edit</button>
    </div>
  );
};

export default TaskItem;
