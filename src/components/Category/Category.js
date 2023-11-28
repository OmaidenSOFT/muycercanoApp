import { React, useState } from "react";
import MerchantByCategories from "../MerchantByCategories/MerchantByCategories";
import url from "../../Data/url";
import './Category.css'

const Category = ({ category, handleMerchant, neighborhoodId }) => {
    const { Id, Descripcion, Total, Imagen } = category
    const myImage = require(`./../../assets/images/ICONOS_APP/${Imagen}`);
    const [merchanbyCategories, setmerchanbyCategories] = useState([])

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

    const showContent = () => {
        if (merchanbyCategories.length > 0) {
            return (
               <MerchantByCategories merchantCategories={merchanbyCategories} />
               )
        }
        else {
            return (
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

            )
        }
    }

    return (
        <div className="demo-form">
            {showContent()}
        </div>
    )
}

export default Category