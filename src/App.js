import { React } from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'



import './App.css';

import Logo from './assets/images/logoROJOPNG.png'
import Paso1 from './assets/images/paso1.png';
import Necesitas from './assets/images/necesitas.png';
import Iacerca from './assets/images/Iacerca.png';
import IPromo from './assets/images/Ipromo.png';
import IRegistro from './assets/images/Iregistro.png';
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';

function App() {
  return (
    <div className='App'>
      <Router >

        <nav className="navbar" id="navbar">
          <ul>
            <li><NavLink to="/"><img src={Logo} /> <img src={Necesitas} /></NavLink></li>
            <li><a href="#"><img src={IRegistro} /></a></li>
            <li><a href="#"><img src={Iacerca} /></a></li>
            <li><a href="#"><img src={IPromo} /></a></li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={ <Home/> }/>
          <Route path="/Categories" element={ <Categories/> }/>
        </Routes>
    

      </Router>


      
    </div>
  );
}

export default App;
