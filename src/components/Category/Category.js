import React from "react";
import './Category.css'

const Category = ({ category }) => {
    const { Id, Descripcion, Total, Imagen } = category
    const myImage = require(`./../../assets/images/ICONOS_APP/${Imagen}`);
       return (
        <div className="Category">
            <img
                src={myImage}
                alt={Descripcion}
            />
            <h3>{Descripcion}</h3>
            <p>Total comercios( {Total})</p>
            <button
            // onClick={ () => addToCart(id) }
            >
                Seleccionar
            </button>
        </div>

    )
}

export default Category