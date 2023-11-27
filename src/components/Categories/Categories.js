import React from "react";
import Category from "../Category/Category";
import './Categories.css'

const Categories = ({categories}) => {
      return (
        <>
        <h3>Categorias de Comercios para el barrio</h3>
        <div className="Categories">
            <div className="Categories">
            {
                categories.map(category => (
                    <Category
                        key={ category.Id } 
                        category={ category }
                        />
                ))
            }
            </div>
            {/* <div >aca van las promociones</div> */}
        </div>
        </>
    )
}

export default Categories