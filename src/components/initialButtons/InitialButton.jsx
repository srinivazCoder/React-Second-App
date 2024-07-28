import { useState } from "react";
import "./IntialButtons.css";
export default function InitialButtons({generateArray,resetArray,isOrderAscending}){
    const [isAscendingOrder,setIsAscendingOrder] = useState(null);

   

    function handleOrders(order){
        
        isOrderAscending(order)
        setIsAscendingOrder(order)
    }
    return (
        <div className="initialButtonContainer">
            <div>
                <button className= "btn" onClick={()=>generateArray()}>Generate Array</button>
            </div>
            <div>
                <button className={isAscendingOrder ? "clicked" : "btn"}onClick={()=>handleOrders(true)}>Ascending Order</button>
            </div>
            <div>
                <button className={!isAscendingOrder && isAscendingOrder != null ? "clicked" : "btn"} onClick={()=>handleOrders(false)}>Descending Order</button>
            </div>
            <div>
                <button className="btn" onClick={resetArray}>Reset</button>
            </div>
        </div>
    );
}