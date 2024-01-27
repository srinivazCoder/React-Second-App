import { useState } from "react";


const UserChallenge = () => {
    const [user, setUser] = useState()

    const login = () => {
        setUser({ name: 'food truck' })
    }
    const logout = () => {
        setUser(null)
    }
    return (
        <div>
            {user ?
                <div>
                    <h4>hello there {user.name}</h4>
                    <button onClick={logout}>logout</button>
                </div>
                :
                <div>
                    <h4>Please login</h4>
                    <button onClick={login}>login</button>
                </div>}
        </div>
    )
}

export default UserChallenge;