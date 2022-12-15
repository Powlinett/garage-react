import * as React from 'react'
import './App.css';
import Sidebar from './components/Sidebar';
import CarsList from './components/CarsList';

function App() {
  return (
    <div className='d-flex'>
      <Sidebar/>
      <CarsList/>
    </div>
  );
}

export default App;
