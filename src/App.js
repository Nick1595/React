import React from 'react';
import Hotel from './Hotel';

import Login from "./Login"
import { Route,Routes, } from 'react-router-dom';
function App(){

  return(
    <>
    <Routes>
      <Route path='/' element={<Hotel/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </>
  );
}
export default App;