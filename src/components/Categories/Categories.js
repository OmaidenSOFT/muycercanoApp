import {React, useState} from "react";
import Category from "../Category/Category";
import MerchantByCategories from "../MerchantByCategories/MerchantByCategories";
import url from "../../Data/url";
import Paso2 from '../../assets/images/paso2.png';
import './Categories.css'

const Categories = ({categories, neighborhoodId, nameNeighborhood}) => {
    const [merchanbyCategories, setmerchanbyCategories] = useState([])
    


 const handleMerchandByCategories = (options) => {

    fetch(`${url}ComerciosxCategorias`, options)
    .then(response => response.json())
    .then(data => setmerchanbyCategories(data.MCComercioxCategorias))
    .catch(error => console.error(error));

 }

 const showContent = () => {
    if(merchanbyCategories.length > 0){
        return (
            <MerchantByCategories merchantCategories={merchanbyCategories} nameNeighborhood={ nameNeighborhood.toLowerCase() } />
        )
    } else {
        return (
            <>
        <img src={Paso2} alt="Paso 2" className="categories-step"/>
        <h3>Categorias de Comercios para el barrio <em>{ nameNeighborhood.toLowerCase() }</em></h3>
        <div className="Categories">
            <div className="Categories">
            {
                categories.map(category => (
                    <Category
                        key={ category.Id } 
                        category={ category }
                        handleMerchant={ handleMerchandByCategories }
                        neighborhoodId={ neighborhoodId }
                        />
                ))
            }
            </div>
            {/* <div >aca van las promociones</div> */}
        </div>
        
        </>
        )
    }
 }

      return (
        <>
        {showContent()}
        </>
    )
}

export default Categories