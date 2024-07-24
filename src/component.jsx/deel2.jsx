import '../App.css';
import { inventory } from "../constants/inventory.js";
import {useState} from "react";

    function Deel2() {
        const [inventoryArray, setInventoryArray] = useState(inventory);

        const MeestVerkocht = () => {

            const sortedInventory = [...inventoryArray].sort((a, b) => b.sold - a.sold);


            setInventoryArray(sortedInventory);
        };


        const Goedkoopste = () => {
            const sortedInventory = [...inventoryArray].sort((a, b) =>  a.price - b.price);


            setInventoryArray(sortedInventory);


        }

        const Sport = () => {
            const sortedInventory = [...inventoryArray].sort((a, b) =>   b.refreshRate - a.refreshRate);


            setInventoryArray(sortedInventory);
        }



    return (
        <div className="App">
            <h2>Alle tvs</h2>
            <section className="buttons-Deel2">

                <button onClick={MeestVerkocht}>Meest verkocht eerst</button>

                <button onClick={Goedkoopste} > Goedkoopste eerst</button>

                <button onClick={Sport}> Meest geschikt voor sport eerst</button>


            </section>


            <section>
                {inventoryArray.map((tv, index) => (
                    <div className='backround-Deel2' key={index}>
                        <img src={tv.sourceImg} alt={`${tv.brand} ${tv.type} - ${tv.name}`} className="tv-image-Deel2"/>
                        <div className="text-Deel2">
                            <h2 className="title-Deel2">{`${tv.brand} ${tv.type} - ${tv.name}`}</h2>
                            <p className="price-Deel2">{`Prijs: €${tv.price},-`}</p>
                            <p>Beschikbare groottes: {tv.availableSizes.map(size => `${size} inch`).join(' | ')}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Deel2;