import React, { useState } from 'react';
import Tasks from './Tasks.jsx';

const Secret = () => {
  const [task, setTask] = useState(['wat', 'eot']);

  console.log(task);

  const handleDelete = (e) => {
    e.preventDefault;
    console.log(e);
  };

  const handleEvent = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    setTask([...task, e.target[0].value]);
  };

  return (
    <div>
      <form onSubmit={handleEvent}>
        <input type="text"></input>
        <button type="submit"> Add Task </button>
        <button> Get Tasks </button>
      </form>
      {task.map((item, i) => {
        return (
          <Tasks item={item} key={i} id={id} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
};

export default Secret;
