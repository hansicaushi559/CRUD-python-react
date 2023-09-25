import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Create from './pages/Create';
import Edit from './pages/Edit';
import Delete from './pages/Delete'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Edit/>} />
        <Route path='/delete/:id' element={<Delete />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

