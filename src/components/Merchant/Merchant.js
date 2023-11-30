import { React, useState } from "react";
import url from "../../Data/url";
import './Merchant.css'

const Merchant = () => {
    const myImage = require(`./../../assets/images/merchant.png`);
    return (
        <div className="Merchant">
            <img
                src={myImage}
                alt="Comercio"
            />
            <h3>Comercio</h3>
            <p>Total comercios( 2)</p>
        </div>
    )
}

export default Merchant