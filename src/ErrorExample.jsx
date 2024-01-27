import { data } from "./data"
import { useEffect, useState } from "react";

import "./App.css";
const ErrorExample = () => {

    const [count, setCount] = useState(0);
    const [people, setPeople] = useState(data);

    //counter
    const [value,setValue] = useState(0)
    // for useState Object example

    const [name,setName] = useState('peter');
    const [age,setAge] = useState(23);
    const [hobby,setHobby] = useState('Read Books');

    const [objname,setObjname] = useState({
        name:'Rama',
        age:21,
        hobby:'reading books'
    })

    const handleClick = () => {
        setCount(count + 1)
        setName("Hello Jhone")
    }
    // let count = 0;
    const removeItem =(name)=>{
        console.log(name)
        const data = people.filter((d)=>d.name!==name)
        console.log(data)
        setPeople(data)
    }

    const clearAll=()=>{
        setPeople([])
    }

    const handleCounter=()=>{
        
        setTimeout(() => {  
            setValue((currentState)=>{
                return currentState+1
            })
        }, 3000);
        // setValue((currentState)=>{
        //    return currentState+1
        // })
    }
    const sayHello=()=>{
        console.log('Say hello')
        // setValue(value+1)
    }
    sayHello()

    // useEffect(()=>{
    //     console.log('use effect fired for remove item')
    // },[removeItem])
    return (
        <>

            <h4>You clicked {count} Times</h4>
            <button className="" type="button" onClick={handleClick}>{count}</button>
            <div className="center">
                {people.map((person) => {
                    const { id, name } = person
                    // console.log(id, name)
                    return (
                        <div key={id}>
                            <h4 >{name}</h4>
                            <button type="button" onClick={()=>removeItem(name)}>remove</button>
                        </div>
                        
                    )
                })}

                <button className="btn" style={{marginTop:'2rem'}} type="button" onClick={clearAll}>Clear all</button>
            </div>
            <h2>useState Object example</h2>
            <div>
                <h3>{name}</h3>
                <h2>{age}</h2>
                <h4>Enjoy's: {hobby}</h4>
                <button type="button" onClick={()=>{setName('jhon');setAge(21);setHobby('watching movies')}}>Show Jhon's</button>
            </div>
            <h2>useState Object example with one useState</h2>
            <div>
                <h3>{objname.name}</h3>
                <h2>{objname.age}</h2>
                <h4>Enjoy's: {objname.hobby}</h4>
                <button type="button" onClick={()=>{setObjname({ name:'sita',age:20,hobby:'scream at the computer'})}}>Show Sita's</button>
                <button type="button" onClick={()=>{setObjname({...objname ,hobby:'scream at the computer'})}}>Show Sita's</button>
            </div>

            <br>
            </br>
            <h3 className="btn">counter</h3>
            <h5>{value}</h5>
            <button type="button" className="btn" onClick={handleCounter}>counter</button>

        </>

    );
}

export default ErrorExample