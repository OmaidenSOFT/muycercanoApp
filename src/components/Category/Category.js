import React from "react";
import './Category.css'

const Category = ({ category }) => {
    const { Id, Descripcion, Total, Imagen } = category
    console.log(category)
    return (
        <div className="Category">
            <img
                src={Imagen}
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