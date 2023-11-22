import './LocationProduct.css';

function LocationProduct() {
    return (
        <div className="field">
        <h3 className="titlesPagesD">
            Buscas algun producto?
        </h3>
        <input type="text" id="prod" name="prod" placeholder="Producto(Tornillo, Hamburguesas, Aspirinas, quizas almuerzo corrientes, costilla de res , etc)" autoComplete="off" maxLength="200" /> 
    </div>
    );
    }
     export default LocationProduct;