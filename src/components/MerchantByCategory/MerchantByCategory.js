import React from "react";
import './MerchantByCategory.css'
const MerchantByCategory = ({ merchantcategory }) => {
    console.log(merchantcategory)
    const { Id, Nombre , Direccion,TelDomicilio1,Logo, Horario, ManejaDomicilio} = merchantcategory
    const myImage = require(`./../../assets/images/ICONOS_APP/merchant.png`);
    const myImageDelivery = require(`./../../assets/images/domicilio.png`);
    const notImageDelivery = require(`./../../assets/images/notDelivery.jpg`);
    
    const maybeRenderDeliveryImg =()=> {
        if ( ManejaDomicilio ) {
            return  <img src={myImageDelivery} alt={Nombre} />;
        }
        else
        {
            return <img src={notImageDelivery} alt={Nombre} />;
        }
    }
    
  
    const handleClick= async () =>  {
       
        }




       return (
        <div className="MerchantByCategory">
            <img
                src={myImage}
                alt={Nombre}
            />
            <h3>{Nombre}</h3>
            <p>Dirección: {Direccion}</p>
            <p>Teléfonos: {TelDomicilio1}</p>
            <p>Horario: {Horario}</p>
            {maybeRenderDeliveryImg()}
            <button
            onClick={handleClick}
            >
                Seleccionar
            </button>
        </div>

    )
}

export default MerchantByCategory