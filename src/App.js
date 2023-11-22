import LocationTitle from './components/LocationTitle/LocationTitle';
import LocationCity from './components/LocationCity/LocationCity';  
import LocationTrade from './components/LocationTrade/LocationTrade';
import LocationProduct from './components/LocationProduct/LocationProduct';

import './App.css';

import Logo from './assets/images/logoROJOPNG.png'
import Paso1 from './assets/images/paso1.png';
import Necesitas from './assets/images/necesitas.png';
import Iacerca from './assets/images/Iacerca.png';
import IPromo from './assets/images/Ipromo.png';
import IRegistro from './assets/images/Iregistro.png';

function App() {
  return (
   <>


<nav className="navbar" id="navbar">
        <ul>
            <li><a href="#"><img src={Logo} /> <img src={Necesitas} /></a></li>
            <li><a href="#"><img src={IRegistro} /></a></li>
            <li><a href="#"><img src={Iacerca} /></a></li>
            <li><a href="#"><img src={IPromo}/></a></li>
        </ul>
    </nav>



  <div className="ui equal width form" id="demo-form">
        <div className="fields">
            <LocationTitle></LocationTitle>
        </div>
        <div className="fields">
            <LocationCity></LocationCity>
        </div>
    
    

        <div className="fields">
            <LocationTrade></LocationTrade>
        </div>

        <div className="fields">
            <LocationProduct></LocationProduct>
        </div>
    </div>

    <div className="ui equal width form" id="demo-form">

        <div className="fields">
            <div className="field">
                    <button className="ui primary button" id="btnBuscar">
                        Buscar
                    </button>
            </div>
        </div>
    </div>


<div className="ui equal width form" id="demo-form">
<div className="fields">
<div className="field"> */}
<img src={Paso1} />
 </div>
</div>
</div> 



    </>
    );
}

export default App;
