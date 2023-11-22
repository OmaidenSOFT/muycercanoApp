import { React, useState, useEffect } from "react";
import './LocationCity.css';
function LocationCity() {
    //Logica

     const [cities, setCities] = useState([])
    const [selected, setSelected] = useState();
    const [selectedZone, setSelectedZone] = useState();
    const [zones, setZones] = useState([]);
    const [neighborhoods, setNeighborhoods] = useState([]);

    let cityID =1;
 
    //API
    useEffect(() => {
        fetch('http://localhost:12911/api/MuyCercano/Ciudades')
            .then(response => response.json())
            .then(data => setCities(data.MCCiudad))
    }, [])

    const handleChange = event => {
        setSelected(event.target.value);
        cityID = event.target.value;

        fetch('http://localhost:12911/api/MuyCercano/Localidades?ciudadId=' + cityID)
            .then(response => response.json())
            .then(data => setZones(data.MCLocalidad))
            .catch(error => console.error(error));

    };


   const handleChangeZone= event => {
        setSelectedZone(event.target.value);
        const zoneID = event.target.value;
        console.log(zoneID);
        fetch('http://localhost:12911/api/MuyCercano/Barrios?zonaId=' + zoneID)
            .then(response => response.json())
            .then(data => setNeighborhoods(data.MCBarrios))
            .catch(error => console.error(error));

    };

    //jsx
    return (
        <>
            <div className="field">
                <h3 className="titlesPagesD">
                    Ciudad
                </h3>
                <select id="cbxCiudad" value={selected} name="cbxCiudad" className="ui search dropdown" onChange={handleChange}>
                    {
                        cities.map(city => {
                            return <option key={city.Id} value={city.Id}>{city.Ciudad}</option>
                        })
                    }
                </select>

            </div>

            <div className="field">
                <h3 className="titlesPagesD">
                    Zona
                </h3>
                <select id="cbxLocalidad" value={selectedZone} name="cbxLocalidad" className="ui search dropdown" onChange={handleChangeZone}>
                    {
                        zones.map(zone => {
                            return <option key={zone.Id} value={zone.Id}>{zone.Localidad}</option>
                        })
                    }
                </select>

            </div>

            <div className="field">
                <h3 className="titlesPagesD">
                    Barrio
                </h3>
                <select id="cbxBarrio" name="cbxBarrio" className="ui search dropdown">
                {
                        neighborhoods.map(neighborhood => {
                            return <option key={neighborhood.Id} value={neighborhood.Id}>{neighborhood.Barrio}</option>
                        })
                    }
                </select>

            </div>
        </>


    );
}
export default LocationCity;