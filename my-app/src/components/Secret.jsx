import React, { useState } from 'react';
import Tasks from './Tasks.jsx';

const Secret = () => {
  const [task, setTask] = useState([]);

  console.log(task);

  const handleDelete = (e) => {
    e.preventDefault;
    console.log(e);
  };

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(e);
    fetch('http://localhost:3000/tasks')
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setTask(data);
      })
      .catch((err) => console.log('handleClick error', err));
  };

  const handleEvent = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ task: e.target[0].value }),
    })
      .then((data) => data.json())
      .then((data) => setTask([...task, data]))
      .catch((err) => {
        console.log('handleEvent error', err);
      });

    // setTask([...task, e.target[0].value]);
  };

  const tasks = [];
  for (let i = 0; i < task.length; i++) {
    tasks.push(
      <Tasks item={task[i].item} key={i} handleDelete={handleDelete} />
    );
  }
  console.log(task);
  return (
    <div>
      <form onSubmit={handleEvent}>
        <input type="text"></input>
        <button type="submit"> Add Task </button>
        <button onClick={handleClick}> Get Tasks </button>
      </form>
      {tasks}
    </div>
  );
};

export default Secret;
