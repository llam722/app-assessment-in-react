import React from 'react';
import Login from './Login.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Secret from './Secret.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/secret" element={<Secret />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
