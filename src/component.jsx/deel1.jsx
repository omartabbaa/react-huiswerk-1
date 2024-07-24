import '../App.css';
import { inventory } from "../constants/inventory.js";

function Deel1() {

    const soldTV = () => {
        let totalSold = 0;
        for (let i = 0; i < inventory.length; i++) {
            totalSold += inventory[i].sold;
        }
        return totalSold;
    }

    const ingekochte = () => {
        let totalingekochte = 0;
        for (let i = 0; i < inventory.length; i++) {
            totalingekochte += inventory[i].originalStock;
        }
        return totalingekochte;
    }

    const totalSold = soldTV();
    const totalingekochte = ingekochte();
    const totalInventory = totalingekochte - totalSold; // Calculating the current stock

    return (
        <div className="App">

            <h1>Tech it easy dashboard</h1>
            <h2 className="">Verkoopoverzicht</h2>

            <section>
                <div className="row">
                    <div className="sold"><div className="sold-text">Aantal verkochte producten:</div> {totalSold}</div>
                    <div className="bough" ><div className="bough-text" >Aantal ingekochte producten: </div>{totalingekochte}</div>
                    <div className="stock" ><div className="stock-text"  >Aantal te verkopen producten:</div> {totalInventory}</div>
                </div>
            </section>

            <section>
                {inventory.map((tv, index) => (
                    <div className='backround' key={index}>
                        <img src={tv.sourceImg} alt={`${tv.brand} ${tv.type} - ${tv.name}`} className="tv-image"/>
                        <div className="text">
                            <h2 className="title" >{`${tv.brand} ${tv.type} - ${tv.name}`}</h2>
                            <p className="price" >{`Prijs: €${tv.price},-`}</p>
                            <p>Beschikbare groottes: {tv.availableSizes.map(size => `${size} inch`).join(' | ')}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Deel1;