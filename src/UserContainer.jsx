import { useContext, useState } from "react";
import { NavbarContext, useAppContext } from "./NavBar";

const userContainer = () => {
    const { user, logout,login } = useAppContext();

    const [lname,setLname] = useState('');

    const handleChange = (e)=>{
        e.preventDefault();
        setLname(e.target.value)
        
    }
   
    return (
        <div>
            {
                user ?
                    <>
                        <p>Hello There, {user?.name?.toUpperCase()}</p> &nbsp;
                        <button onClick={logout}>logout</button>
                    </> :

                    <>
                        <p>Please Login</p>
                        <input type="text" value={lname} onChange={handleChange}/> &nbsp;
                        <button onClick={()=>login(lname)}> &nbsp; Login</button>
                    </>
            }

        </div>
    )
}

export default userContainer;
