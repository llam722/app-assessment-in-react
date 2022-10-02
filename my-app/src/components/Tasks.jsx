import React from 'react';

const Tasks = ({ item, handleDelete }) => {
  return (
    <div>
      <li>{item}</li>
      <button onClick={handleDelete}>X</button>
    </div>
  );
};

export default Tasks;
