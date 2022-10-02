import React from 'react';

const Tasks = ({ item, handleDelete, _id }) => {
  return (
    <>
      <li>{item}</li>
      <button onClick={handleDelete}>X</button>
    </>
  );
};

export default Tasks;
