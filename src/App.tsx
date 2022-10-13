import React from 'react';
import Modal from './containers/modal';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route element={<p style={{color: 'red'}}>fvlfvfv'fvl;fkv</p>} path='/all' />
          <Route path='/' element={<Modal title='Converter' />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
