import BarChart from "../barChart/BarChart";
import "./Sort.css";
import SortButtons from "../sortButtons/sortButtons";
import InitialButtons from "../initialButtons/InitialButton"
import {useState } from "react";



const BUBBLE_SORT = "BubbleSort";
const INSERTION_SORT = "InsertionSort";
const SELECTION_SORT = "SelectionSort";

export default function Sort() {
    const [data, setData] = useState([]);
    const [swap, setSwap] = useState([-1, -1]);
    const [counter, setCounter] = useState(0);
    const [swapCount, setSwapCount] = useState(0);
    const [sortedValues, setSortedValues] = useState([]);
    const [isAscendingOrder, setIsAscendingOrder] = useState(false);

    function generateRandomArray() {
        resetInitialStates();
        let generatedArray = Array(15).fill(0).map((e) => Math.floor(Math.random() * 101));
        setData(generatedArray);
        return;
    }


    function resetInitialStates(){
        setData([]);
        setSortedValues([]);
        setCounter(0);
        setSwapCount(0);
    }




    function resetArray() {
        window.location.reload();
    }

    function handleOrder(isAscendingOrderSelected) {
        setIsAscendingOrder(isAscendingOrderSelected);
    }

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    function handleAlgorithm(algoName) {
        if (algoName === BUBBLE_SORT) {
            handleBubbleSort([...data]);
        } else if (algoName === INSERTION_SORT) {
            handleInsertionSort([...data])
        } else {
            handleSelectionSort([...data])
        }
    }

    async function handleBubbleSort(arr) {
        let len = arr.length;
        let sorted = false;

        while (!sorted) {
            sorted = true;

            setSwapCount(0)
            for (let i = 0; i < len - 1; i++) {
                setCounter((p) => p + 1);

                if (isAscendingOrder ? arr[i] > arr[i + 1] : arr[i] < arr[i + 1]) {
                    setSwapCount((s) => s + 1)
                    setSwap([i, i + 1]);
                    await delay(600);
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                    setData([...arr]);
                    sorted = false;
                    await delay(500);
                }
            }
            len--;
            setSortedValues((sv) => [...sv, len])

        }

        
        setSwap([-1, -1]);
        setSortedValues((sv) => [...arr.map((e, i) => i)])

    }




    async function handleInsertionSort(arr) {
        setCounter(0);
        setSortedValues((sv) => [...sv, 0]);
        for (let i = 1; i < arr.length; i++) {
            setCounter((p) => p + 1);
            setSwapCount(0)
            let key = arr[i];
            let j = i - 1;
            while (j >= 0 && (isAscendingOrder ? arr[j] < key : arr[j] > key)) {
                setCounter((p) => p + 1);
                setSwapCount(s => s + 1);
                setSwap([i, j]);
                arr[j + 1] = arr[j];
                await delay(600);
                setSwap([-1, -1]);
                j = j - 1;
            }
            arr[j + 1] = key;
            await delay(500);
            setSortedValues((sv) => [...sv, i]);
            setData([...arr])
        }

        setData([...arr])

        return arr;
    }
    async function handleSelectionSort(arr) {
        let n = arr.length;
        setCounter(0);
        for (let i = 0; i < n; i++) {
            let minIndex = i;
            for (let j = i + 1; j < n; j++) {
                setCounter((c) => c + 1);
                if ( isAscendingOrder ? arr[j] < arr[minIndex] : arr[j] > arr[minIndex] ) {
                    minIndex = j;
                    await delay(100);
                }
            }
            setSwap([i, minIndex]);
            setSwapCount((s) => s + 1);
            await delay(600);
            if (minIndex != i) {
                [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            }
            setSortedValues((s) => [...s, i]);
            setData([...arr]);
            await delay(500);
        }

        setSwap([-1, -1]);


    }





    return (
        <div>
            <div className="header">Sort Visualizer</div>
            <div className="comparisions_swap">
                <div className="header">Comparisions {counter}</div>
                <div className="header">Swaps {swapCount}</div>
            </div>

            <InitialButtons generateArray={generateRandomArray} resetArray={resetArray} isOrderAscending={handleOrder} />

            <div className="chartContainer">
                <BarChart data={data} swap={swap} sortedIndex={sortedValues} />
            </div>

            <SortButtons selectHandle={handleAlgorithm} />
        </div>
    )
}