import React from "react";
import MerchantByCategory from "../MerchantByCategory/MerchantByCategory";
import './MerchantByCategories.css'

const MerchantByCategories = ({ merchantCategories }) => {
    
    return (
        <>
            <h3>Comercios para el barrio</h3>
            
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
            
        </>
    )
}

export default MerchantByCategories