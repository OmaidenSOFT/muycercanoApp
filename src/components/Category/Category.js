import { React, useState } from "react";
import MerchantByCategories from "../MerchantByCategories/MerchantByCategories";
import url from "../../Data/url";
import './Category.css'

const Category = ({ category }) => {
    const { Id, Descripcion, Total, Imagen } = category
    const myImage = require(`./../../assets/images/ICONOS_APP/${Imagen}`);
    const [merchanbyCategories, setmerchanbyCategories] = useState([])

    const handleClick = async () => {
        const barrioId = localStorage.getItem('barrioId')

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
        fetch(`${url}ComerciosxCategorias`, options)
            .then(response => response.json())
            .then(data => setmerchanbyCategories(data.MCComercioxCategorias))
            .catch(error => console.error(error));
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