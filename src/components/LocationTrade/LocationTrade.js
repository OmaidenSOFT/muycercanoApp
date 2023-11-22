import './LocationTrade.css';

function LocationTrade() {
    return (
        <div className="field">
        <h3 className="titlesPagesD">
            Que tipo de comercio buscas?
        </h3>

        <input type="text" id="comerce" name="comerce" placeholder="Tipo de comercio(Ferreteria, drogueria, comodas rápidas, etc)" autoComplete="off" maxLength="200" />
    </div>
    );
    }
     export default LocationTrade;