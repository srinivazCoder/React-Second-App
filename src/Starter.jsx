import { useEffect, useState } from "react";

const Starter=()=>{
    const [text,setText] = useState('');
    const [name,setName] = useState('susan');
    const [user,setUser] = useState({user:'Jhon'});

    const [isEditing,setEditing]=useState(false)


    return (
        <div>
            {!text && <SomeComponent name={text}/>}
            {user && <SomeComponent name={user.user}/>}
            <button className="btn">{isEditing?"Edit":"add"}</button>
            {user? 
            <div>
                <h6>hello {user.user}</h6>
            </div>
            :<div><p>Please login</p></div>}
        </div>
    )
}

const SomeComponent=({name})=>{
    return (
        <div>
            <h5>user name {name}</h5>
        </div>
    )
}
export default Starter;