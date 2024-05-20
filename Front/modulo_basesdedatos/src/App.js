
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import React, { useState } from 'react';
import Dashboard from './Componentes/Dashboard.js';
import Login from './Componentes/login.js';
import NavigateBar from './Componentes/NavigateBar.js';
import NavigateBarAG from './Componentes/NavigateBarAG.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registro from './Componentes/Registro.js';
import ConsultaRequerimiento from './Componentes/AnalistaGeneral/ConsultaRequerimiento.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/Registrarse" element={<Registro/>}/>
    <Route path="/" element={<Login/>}></Route>
      <Route path="/NavigateBar" element={<NavigateBar/>}>
     <Route index element={<Dashboard />} />
       <Route  path="CrearREQ" element ={<></>}/>

     </Route>

    <Route path="/NavigateBarAG" element={<NavigateBarAG/>}>
        <Route index element={<ConsultaRequerimiento/>} />
        <Route  path="VerREQ" element ={<></>}/>
        
    </Route>

     
    </Routes>
   </BrowserRouter>
  );
}

export default App;
