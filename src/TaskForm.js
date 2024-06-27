import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('Low');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      title,
      description,
      category,
      priority,
      deadline,
      completed: false
    };
    addTask(newTask);
    setTitle('');
    setDescription('');
    setCategory('');
    setPriority('Low');
    setDeadline('');
  };

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      padding: '1rem',
      marginBottom: '1rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Title" 
        style={{
          marginBottom: '0.5rem',
          padding: '0.5rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
        required 
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Description" 
        style={{
          marginBottom: '0.5rem',
          padding: '0.5rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
        required 
      />
      <input 
        type="text" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        placeholder="Category" 
        style={{
          marginBottom: '0.5rem',
          padding: '0.5rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
        required 
      />
      <select 
        value={priority} 
        onChange={(e) => setPriority(e.target.value)} 
        style={{
          marginBottom: '0.5rem',
          padding: '0.5rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input 
        type="date" 
        value={deadline} 
        onChange={(e) => setDeadline(e.target.value)} 
        style={{
          marginBottom: '0.5rem',
          padding: '0.5rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
        required 
      />
      <button 
        type="submit" 
        style={{
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          backgroundColor: '#2196f3',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
