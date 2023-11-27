import React from "react";
import './MerchantByCategory.css'
const MerchantByCategory = ({ merchantcategory }) => {
    console.log(merchantcategory)
    const { Id, Nombre , Direccion,TelDomicilio1,Logo, Horario, ManejaDomicilio} = merchantcategory
    const myImage = require(`./../../assets/images/ICONOS_APP/BELLEZA.png`);
    const myImageDelivery = require(`./../../assets/images/domicilio.png`);
    
    const maybeRenderDeliveryImg =()=> {
        if ( ManejaDomicilio ) {
            return  <img src={myImageDelivery} alt={Nombre} />;
        }
        else
        {
            return <h3>No tenemos domicilio</h3>;
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