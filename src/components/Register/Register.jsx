import {React, useState, useEffect} from "react"
import url from "../../Data/url"
import './Register.css'
import Swal from "sweetalert2"
import firebase from '../../Data/firebase'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

const Register = ()=>{
    const [cities, setCities] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCity, setSelectedCity] = useState()
    const [zones, setZones] = useState([]);
    const [selectedZone, setSelectedZone] = useState();
    const [neighborhoods, setNeighborhoods] = useState([]);
    const [selectedNeighborhood, setSelectedNeighborhood] = useState(); 
    const [nameNeighborhood, setNameNeighborhood] = useState("")
    const [formData, setFormData] = useState({
        merchantName: '',
        logo: null,
        address: '',
        category: 0,
        city: 0,
        zone: 0,
        neighborhood: 0,
        phone1: '',
        phone2: '',
        phone3: '',
        available: '',
        hasDelivery: '',
        facebook: '',
        instagram: '',
        youtube: '',
        email: '',
        password: ''
    })
    const auth = getAuth(firebase)
    


    useEffect(() => {
        fetch(`${url}Categorias`)
            .then(response => response.json())
            .then(data => setCategories(data.MCCategorias))
    }, [])
    useEffect(() => {
        fetch(`${url}Ciudades`)
            .then(response => response.json())
            .then(data => setCities(data.MCCiudad))
    }, [])

    const handleFileChange = (event) => {
        const file = event.target.files[0]
        if(!!file){
            if (file.type === 'image/jpeg' || file.type === 'image/png'){
                setFormData((prevData)=>({
                    ...prevData,
                    ["logo"]: event.target.files[0]
                }));
            }else {
                Swal.fire({
                    title: 'Error',
                    text: 'Debe escoger el formato correcto de imagen (jpeg o png)',
                    icon: 'error',
                    confirmButtonText: 'Okay',
                });
                
            }
        }
       
    }

    const handleSelectedCategory = event => {
        setFormData((prevData)=>({
            ...prevData,
            ["category"]: event.target.value
        }))
    }

    const handleSelectedCity = event => {
        setSelectedCity(event.target.value);
        setFormData((prevData)=>({
            ...prevData,
            ["city"]: event.target.value
        }))
        const cityID = event.target.value;

        fetch(`${url}Localidades?ciudadId=${cityID}`)
            .then(response => response.json())
            .then(data => setZones(data.MCLocalidad))
            .catch(error => console.error(error));

    };
    
    const handleSelectedZone = event => {
        setSelectedZone(event.target.value);
        setFormData((prevData)=>({
            ...prevData,
            ["zone"]: event.target.value
        }))
        const zoneID = event.target.value;
        fetch(`${url}Barrios?zonaId=${zoneID}`)
            .then(response => response.json())
            .then(data => setNeighborhoods(data.MCBarrios))
            .catch(error => console.error(error));

    };
    const handleSelectedNeighborhood = event => {
        const selectedOption = event.target.selectedOptions[0];
        setNameNeighborhood(selectedOption.text);
        setSelectedNeighborhood(selectedOption.value);
        setFormData((prevData)=>({
            ...prevData,
            ["neighborhood"]: event.target.value
        }))
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    console.log("form", formData);
    
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const validation = Object.keys(formData).every((key) => 
        {   
            return true });
        if (validation){
            const formDataObject = new FormData();
            Object.keys(formData).forEach((key) => {
                formDataObject.append(key,formData[key]);
            });
            formDataObject.forEach(entity => {
                console.log("#entity",entity);
            });
            await createUser(auth, formData.email, formData.password);
            
        }else{
            Swal.fire({
                title: 'Error',
                text: 'Formulario incompleto',
                icon: 'error',
                confirmButtonText: 'Okay',
              });
        }

        
    }

    const createUser = async (authFirebase, email, password) =>  {
        createUserWithEmailAndPassword(authFirebase, email, password)
        .then((userCredential) => {
            Swal.fire(
                'Done!',
                'User Registered',
                'success'
            )
        }).catch(error => {
            Swal.fire(
                'Ups',
                `Error: ${ error.message }`,
                'error'
            )
        })
    }

    return (
        <form className="form-register" onSubmit={handleFormSubmit}>
            <div className="form-group">
                <input type="text" name="merchantName" placeholder="nombre del comercio"  className="form-field" onBlur={handleInputChange}/>
                <span>Comercio</span>
            </div>
            <div className="form-group align-right">
                 <label htmlFor="fileInput" className="form-group-upload">Subir Logo { !!formData.logo ? ` - ${formData.logo.name}` : " - no se ha seleccionado archivo"}</label>
                    <input id="fileInput" type="file" onChange={ handleFileChange }/>
                <span>logo</span>
            </div>
            <div className="form-group">
                <input type="text" name="address" placeholder="Digite Direccion" className="form-field" onBlur={handleInputChange}/>
                <span>direccion</span>
            </div>
            <div className="form-group">
                    <select id="categories" name="categories" className="form-field ui search dropdown" onChange={handleSelectedCategory}>
                        <option>Seleccione Categoria</option>
                            {
                                categories.map(category => (
                                    <option key={category.Id} value={category.Id}>{category.Descripcion}</option>
                                ))
                            }
                    </select>
                    <span>Categoria</span>
          </div>
            <div className="form-group">
                    <select id="cbxCiudad" value={selectedCity} name="cbxCiudad" className="form-field ui search dropdown" onChange={handleSelectedCity}>
                        <option>Seleccione Ciudad</option>
                        {
                            cities.map(city => {
                                return <option key={city.Id} value={city.Id}>{city.Ciudad}</option>
                            })
                        }
                    </select>
                    <span>Ciudad</span>
          </div>
          <div className="form-group">
                    <select id="cbxLocalidad" value={selectedZone} name="cbxLocalidad" className="form-field ui search dropdown" onChange={handleSelectedZone}>
                        <option>Seleccione una zona o localidad</option>
                        {
                            zones.map(zone => {
                                return <option key={zone.Id} value={zone.Id}>{zone.Localidad}</option>
                            })
                        }
                    </select>
                    <span> Zonas</span>
                </div>

        <div className="form-group">
            <select id="cbxBarrio" value={selectedNeighborhood} name="cbxBarrio" className="ui search dropdown form-field" onChange={handleSelectedNeighborhood}>
                <option>Seleccione un barrio</option>
                {
                    neighborhoods.map(neighborhood => {
                        return <option key={neighborhood.Id} value={neighborhood.Id}>{neighborhood.Barrio}</option>
                    })
                }
            </select>
            <span>Barrio</span>
        </div>

        <div className="form-group">
                <input type="phone" name="phone1" placeholder="Digite telefono" className="form-field" onChange={handleInputChange}/>
                <span>telefono #1</span>
        </div>
        <div className="form-group">
                <input type="phone" name="phone2" placeholder="Digite telefono" className="form-field" onChange={handleInputChange}/>
                <span>telefono #2</span>
        </div>
        <div className="form-group">
                <input type="phone" name="phone3" placeholder="Digite telefono" className="form-field" onChange={handleInputChange}/>
                <span>telefono #3</span>
        </div>
        <div className="form-group">
                <textarea className="form-field" name="available" placeholder="Digite horario" onChange={handleInputChange}></textarea>
                <span>Horario</span>
        </div>
        <div className="form-group align-right">
            <label className="form-group-radio">
                <input type="radio" name="hasDelivery" value="si" onChange={handleInputChange}/>
                Si
            </label>
            <label className="form-group-radio">
                <input type="radio"  name="hasDelivery" value="no" onChange={handleInputChange} />
                No
            </label>
            <span>Tiene Domicilio</span>
        </div>
        <div className="form-group">
                <input type="text" name="facebook" placeholder="Ingresar facebook" className="form-field" onChange={handleInputChange}/>
                <span>Facebook</span>
        </div>
        <div className="form-group">
                <input type="text" name="instagram" placeholder="Ingresar instagram" className="form-field" onChange={handleInputChange}/>
                <span>Instagram</span>
        </div>
        <div className="form-group">
                <input type="text" name="youtube" placeholder="Ingresar youtube" className="form-field" onChange={handleInputChange}/>
                <span>Youtube</span>
        </div>
        <div className="form-group">
                <input type="email" name="email" placeholder="Ingresar email" className="form-field" onChange={handleInputChange}/>
                <span>Email</span>
        </div>
        <div className="form-group">
                <input type="password" name="password" placeholder="Ingresar password" className="form-field" onChange={handleInputChange}/>
                <span>Password</span>
        </div>
        <button type="submit" className="button register">Registrar</button>

        </form>
    )

}
export default Register