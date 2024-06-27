import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, updateTask, deleteTask, toggleTaskCompletion, filters }) => {
  const filteredTasks = tasks.filter(task => {
    const categoryMatch = filters.category ? task.category === filters.category : true;
    const priorityMatch = filters.priority ? task.priority === filters.priority : true;
    const statusMatch = filters.status ? (filters.status === 'Complete' ? task.completed : !task.completed) : true;
    return categoryMatch && priorityMatch && statusMatch;
  });

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      padding: '1rem',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }}>
      {filteredTasks.map(task => (
        <div key={task.id} style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.5rem 1rem',
          backgroundColor: '#fff',
          borderRadius: '4px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s ease',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{
              fontSize: '1rem',
              fontWeight: 'bold',
            }}>{task.title}</div>
            <div style={{
              fontSize: '0.875rem',
              color: '#555',
            }}>
              <span>Category: {task.category}</span>
              <span style={{ marginLeft: '1rem' }}>Priority: {task.priority}</span>
            </div>
          </div>
          <div style={{
            display: 'flex',
            gap: '0.5rem',
          }}>
            <button style={{
              padding: '0.5rem',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              backgroundColor: task.completed ? '#4caf50' : '#f44336',
              color: '#fff',
            }} onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button style={{
              padding: '0.5rem',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              backgroundColor: '#f44336',
              color: '#fff',
            }} onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
