import { React } from "react";
import './Category.css'

const Category = ({ category, handleMerchant, neighborhoodId }) => {
    const { Id, Descripcion, Total, Imagen } = category
    const myImage = require(`./../../assets/images/ICONOS_APP/${Imagen}`);

    const handleClick = () => {
        const barrioId = neighborhoodId
        
        const merchanbycategoriesBody = {
            "ComerciosxCategorias": {
                "BarrioId": + barrioId,
                "CategoriaId": + Id
            }
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(merchanbycategoriesBody)
        };
        handleMerchant(options);
       
    }


    return (
        <div className="demo-form">
             <div className="Category">
                    <img
                        src={myImage}
                        alt={Descripcion}
                    />
                    <h3>{Descripcion}</h3>
                    <p>Total comercios( {Total})</p>
                    <button
                        onClick={handleClick}
                    >
                        Seleccionar
                    </button>
                </div>
        </div>
    )
}

export default Category