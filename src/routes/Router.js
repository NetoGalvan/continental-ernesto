import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import NavBar from '../components/NavBar';
import App from '../containers/App';
import Cupones from '../containers/Cupones';


const Router = () => {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<App/>}/>
          <Route exact path="/cupones-vigentes" element={<Cupones/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router;
