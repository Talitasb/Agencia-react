import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contato from '../src/Pages/Contato/Contato'
import Destino from '../src/Pages/Destino/Destino'
import Promocao from '../src/Pages/Promocao/Promocao'
import Home from '../src/Pages/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
  <Router>
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/Destino" element={<Destino/>}></Route>
          <Route path="/Promocao" element={<Promocao/>}></Route>
          <Route path="/Contato" element={<Contato/>}></Route>
        </Routes>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


