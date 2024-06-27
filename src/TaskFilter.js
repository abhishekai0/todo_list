import React from 'react';

const TaskFilter = ({ filters, setFilters }) => {
  const handleCategoryChange = (e) => {
    setFilters({ ...filters, category: e.target.value });
  };

  const handlePriorityChange = (e) => {
    setFilters({ ...filters, priority: e.target.value });
  };

  const handleStatusChange = (e) => {
    setFilters({ ...filters, status: e.target.value });
  };

  return (
    <div style={{
      display: 'flex',
      marginBottom: '1rem',
    }}>
      <select 
        onChange={handleCategoryChange} 
        style={{
          marginRight: '1rem',
          padding: '0.5rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      >
        <option value="">All Categories</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Others">Others</option>
      </select>

      <select 
        onChange={handlePriorityChange} 
        style={{
          marginRight: '1rem',
          padding: '0.5rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      >
        <option value="">All Priorities</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <select 
        onChange={handleStatusChange} 
        style={{
          padding: '0.5rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      >
        <option value="">All Statuses</option>
        <option value="Incomplete">Incomplete</option>
        <option value="Complete">Complete</option>
      </select>
    </div>
  );
};

export default TaskFilter;
