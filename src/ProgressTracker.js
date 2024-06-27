import React from 'react';

const ProgressTracker = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const progress = totalTasks ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '1rem',
      marginBottom: '1rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }}>
      <h3 style={{ marginBottom: '0.5rem' }}>Progress Tracker</h3>
      <div style={{
        backgroundColor: '#f0f0f0',
        height: '20px',
        borderRadius: '4px',
        overflow: 'hidden',
      }}>
        <div style={{
          width: `${progress}%`,
          backgroundColor: 'green',
          height: '100%',
          transition: 'width 0.3s ease',
        }}></div>
      </div>
      <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#555' }}>
        {completedTasks} of {totalTasks} tasks completed ({progress.toFixed(2)}%)
      </p>
    </div>
  );
};

export default ProgressTracker;
