import  {React } from "react";
import LocationCity from "../LocationCity/LocationCity";
import './Home.css'
import url from "../../Data/url";
import { useNavigate } from "react-router-dom";



const Home = ()=>{
    const navigate = useNavigate();
    const handleCategories = (options, nameNeighborhood) =>{
        fetch(`${url}Categorias`, options)
            .then(response => response.json())
            .then((data)=> navigate('categories',{state: {categories: data.MCCategorias, neighborhoodId: JSON.parse(options.body).Categorias.BarrioId, nameNeighborhood: nameNeighborhood}}))
            .catch(error => console.error(error));    
    }


    return(
            <div className="demo-form">
                  <div className="fields">
                        <LocationCity handleFetchCategories={handleCategories} ></LocationCity>
                    </div>
            </div>
    )

}

export default Home