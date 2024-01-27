import { useEffect, useState } from "react"

const CleanupFunction = ()=>{
    const [toggle,setToggle] = useState(false);
    console.log('render')
    return(
        <div>
            <button className="btn" onClick={()=>setToggle(!toggle)}>Toggle Component</button>
            {toggle && <RandomComponent/>}
        </div>
    )
}

const RandomComponent=()=>{
    useEffect(()=>{
        const someFun=()=>{

        }
        window.addEventListener('scroll',someFun);

        return ()=>{
            window.removeEventListener('scroll',someFun)
        }
    },[])
    return <h1>hello there</h1>
}
export default CleanupFunction