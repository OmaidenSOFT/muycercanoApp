import React from "react";
import MerchantByCategory from "../MerchantByCategory/MerchantByCategory";
import './MerchantByCategories.css'
import Paso2 from '../../assets/images/paso2.png';
const MerchantByCategories = ({ merchantCategories, nameNeighborhood }) => {
    console.log("#nameNeig",nameNeighborhood)
    return (

        <>
            <h3>Comercios para el barrio {nameNeighborhood}</h3>
            
                <div className="MerchantByCategories">
                    {
                        merchantCategories.map(merchantcategory => (
                            <MerchantByCategory
                                key={merchantcategory.Id}
                                merchantcategory={merchantcategory}
                            />
                        ))
                    }
                </div>
                <img src={Paso2} alt="Paso 2"/>
        </>
    )
}

export default MerchantByCategories