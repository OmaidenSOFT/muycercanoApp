import React from "react";
import Category from "../Category/Category";
import './Categories.css'

const Categories = ({categories}) => {

    return (
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
    )
}

export default Categories