import  {React, useState } from "react";
import LocationCity from "../LocationCity/LocationCity";
import Categories from "../Categories/Categories";
import './Home.css'


const Home = ()=>{
    const [categories,setCategories] = useState([]);
    const handleCategories = (options) =>{
        fetch('http://186.154.144.132:82/pprotecc/muyCercanoBackend/api/MuyCercano/Categorias', options)
            .then(response => response.json())
            .then(data => setCategories(data.MCCategorias))
            .catch(error => console.error(error));    
    }

   const showContent = ()=>{
    if (categories.length > 0){
        return (
            <Categories categories={categories}/>
        )}
    else {
        return (
            <>
                    <div className="fields">
                        <h1 className="titlesPages">En donde estas ubicado</h1>
                    </div>
                    <div className="fields">
                        <LocationCity handleFetchCategories={handleCategories} ></LocationCity>
                    </div>
                </>
        )
    }
    
   }

    return(
            <div className="demo-form">
                {showContent()}
            </div>
    )

}

export default Home