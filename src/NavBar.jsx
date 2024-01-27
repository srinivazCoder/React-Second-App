import { useState, createContext, useContext } from "react";
import NavLinks from "./NavLinks"; 

export const  NavbarContext = createContext();


export const useAppContext=()=>useContext(NavbarContext)
console.log(NavbarContext)

const NavBar = () => {

    const [user, setUser] = useState({ name: 'bob' })

    const logout = () => {
        setUser(null)
    }
    const login=(name)=>{
        console.log(name)
        setUser({name})
    }

    return (
        <NavbarContext.Provider value={{user,logout,login}}>
            <nav className="navbar">
                <h3>CONTEXT API</h3>
                <NavLinks />
            </nav>
        </NavbarContext.Provider>
    )
}

export default NavBar;