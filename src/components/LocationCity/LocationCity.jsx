import { React, useState, useEffect } from "react";
import './LocationCity.css';
function LocationCity() {
    //Logica

    const [cities, setCities] = useState([])
    const [selected, setSelected] = useState();
    const [selectedZone, setSelectedZone] = useState();
    const [zones, setZones] = useState([]);
    const [neighborhoods, setNeighborhoods] = useState([]);

    let cityID = 1;
    
    //API
    useEffect(() => {
        fetch('http://186.154.144.132:82/pprotecc/muyCercanoBackend/api/MuyCercano/Ciudades')
            .then(response => response.json())
            .then(data => setCities(data.MCCiudad))
    }, [])

    const handleChange = event => {
        setSelected(event.target.value);
        cityID = event.target.value;

        fetch('http://186.154.144.132:82/pprotecc/muyCercanoBackend/api/MuyCercano/Localidades?ciudadId=' + cityID)
            .then(response => response.json())
            .then(data => setZones(data.MCLocalidad))
            .catch(error => console.error(error));

    };


    const handleChangeZone = event => {
        setSelectedZone(event.target.value);
        const zoneID = event.target.value;
        console.log(zoneID);
        fetch('http://186.154.144.132:82/pprotecc/muyCercanoBackend/api/MuyCercano/Barrios?zonaId=' + zoneID)
            .then(response => response.json())
            .then(data => setNeighborhoods(data.MCBarrios))
            .catch(error => console.error(error));

    };

    //jsx
    return (
        <>
            <div className="field">
              
                <div className="form-group titlesPagesD">
                    <select id="cbxCiudad" value={selected} name="cbxCiudad" className="form-field ui search dropdown" onChange={handleChange}>
                        {
                            cities.map(city => {
                                return <option key={city.Id} value={city.Id}>{city.Ciudad}</option>
                            })
                        }
                    </select>
                    <span>Ciudad</span>
                </div>
            </div>

            <div className="field">
              
                <div className="form-group titlesPagesD">
                    <select id="cbxLocalidad" value={selectedZone} name="cbxLocalidad" className="form-field ui search dropdown" onChange={handleChangeZone}>
                        <option>Seleccione una zona o lacalidad</option>
                        {
                            zones.map(zone => {
                                return <option key={zone.Id} value={zone.Id}>{zone.Localidad}</option>
                            })
                        }
                    </select>
                    <span> Zonas</span>
                </div>
            </div>

            <div className="field">
                <div className="form-group titlesPagesD">
                    <select id="cbxBarrio" name="cbxBarrio" className="ui search dropdown form-field">
                        <option>Seleccione un barrio</option>
                        {
                            neighborhoods.map(neighborhood => {
                                return <option key={neighborhood.Id} value={neighborhood.Id}>{neighborhood.Barrio}</option>
                            })
                        }
                    </select>
                    <span>Barrio</span>
                </div>


            </div>
        </>


    );
}
export default LocationCity;