import { useState } from "react";

const UserNewChallenge = () => {
    const [name, SetName] = useState('');
    const [user, SetUser] = useState([]);
    const HandleSubmit = (e) => {
        e.preventDefault();
        if(!name)return
        SetUser([...user,name])
        console.log(user)
        SetName('')
    }
    return (
        <div>
            <div>
                <h4>Users</h4>
                <ul>{user.map((na)=>{
                    return <li key={na}>{na} <button className="btn" onClick={()=>SetUser(user.filter((v)=>v!==na))}>x</button></li>
                })}</ul>
            </div>
            <form onSubmit={HandleSubmit}>
                <h4>User new challenge</h4>
                <label htmlFor="name">Name</label>
                <br />
                <input id="name" type="text" value={name} onChange={(e) => SetName(e.target.value)} />
                <br />
                <button type="submit" >Submit</button>
            </form>

            
        </div>

    )
}

export default UserNewChallenge;