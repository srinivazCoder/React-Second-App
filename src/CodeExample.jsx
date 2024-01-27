import { useEffect, useState } from "react";


const CodeExample = () => {
    const [value, setValue] = useState(0)
    const [scovalue, setscoValue] = useState(0)

    // const sayHello = () => {
    //     console.log('say hello');
    // }
    // sayHello()
    useEffect(()=>{
        console.log("hello from first UseEffect ")
    },[value]);
    useEffect(()=>{
        console.log("hello from second UseEffect ")
    },[scovalue]);
    return (
        <>
            <h1>Code example</h1>

            <h5>Value : {value}</h5>
            <button type="button" onClick={()=>setValue(value+1)}>value</button>
            <h5>Second Value : {scovalue}</h5>
            <button type="button" onClick={()=>setscoValue(scovalue+1)}>Second value</button>
        </>
    )
}

export default CodeExample;