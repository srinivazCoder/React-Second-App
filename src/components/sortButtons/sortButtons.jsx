import { useState } from "react";
import "./sortButton.css";


const BUBBLE_SORT = "BubbleSort";
const INSERTION_SORT = "SelectionSort";
const SELECTION_SORT = "InsertionSort";

export default function SortButtons({selectHandle}){
    const [selectionSort,setSelectionSort] = useState("");

    function handleSort(selectedSort){
        selectHandle(selectedSort);
        setSelectionSort(selectedSort)
    }
    return (
    <div className="button-container">
        <div>
            <button className={selectionSort == BUBBLE_SORT ? 'selected' : "btn tomato"} onClick={()=>handleSort(BUBBLE_SORT)}>Bubble Sort</button>
        </div>
        <div>
            <button className={selectionSort == INSERTION_SORT ? 'selected' : "btn orange"}  onClick={()=>handleSort(INSERTION_SORT)}>Selection Sort</button>
        </div>
        <div>
            <button  className={selectionSort == SELECTION_SORT ? 'selected' : "btn mediumGreen"} onClick={()=>handleSort(SELECTION_SORT)}>Insertion Sort</button>
        </div>
    </div>
    );
}