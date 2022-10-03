import React from 'react';

const Tasks = ({ item, handleDelete, _id }) => {
  return (
    <>
      <li>{item}</li>
      <button onClick={() => handleDelete(_id)}>X</button>
    </>
  );
};

export default Tasks;
