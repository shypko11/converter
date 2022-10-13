import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Modal from './containers/modal';
import List from './containers/list';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route element={<List />} path='/all' />
          <Route path='/' element={<Modal title='Converter' />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
