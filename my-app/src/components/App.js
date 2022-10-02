import React from 'react';
import Login from './Login.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Secret from './Secret.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/secret" element={<Secret />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
