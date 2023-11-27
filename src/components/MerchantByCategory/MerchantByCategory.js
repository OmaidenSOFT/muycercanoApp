import React from "react";
import './MerchantByCategory.css'

const MerchantByCategory = ({ merchantcategory }) => {
    const { Id, nombre , direccion,telDomicilio1,logo, horario, manejaDomicilio} = merchantcategory
    const myImage = require(`./../../assets/images/ICONOS_APP/${logo}`);
    

    const handleClick= async () =>  {
       
        }




       return (
        <div className="MerchantByCategory">
            <img
                src={myImage}
                alt={nombre}
            />
            <h3>{nombre}</h3>
            <p>{direccion}</p>
            <p>{telDomicilio1}</p>
            <p>{horario}</p>
            {manejaDomicilio}?
            <button
            onClick={handleClick}
            >
                Seleccionar
            </button>
        </div>

    )
}

export default MerchantByCategory