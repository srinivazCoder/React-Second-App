import { useState } from "react"

const MultipleInputs = () => {
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:""
    })


    const handleSubmit=(e)=>{
        e.preventDefault();
        
        console.log(user)
    }
    const hanleChange=(e)=>{
        console.log(e.target.name)
        console.log(e.target.value)
 
        setUser({...user, [e.target.name]:e.target.value})
    }
    return (
        <>

            <h4 style={{ color: 'black', padding: 20, textAlign: "center" }}>Multiple Inputs</h4>
            <form style={{ color: 'black', padding: 20,marginLeft:20 }} onSubmit={handleSubmit}>
                <div className="inp">
                    <label htmlFor="name">Name</label>
                    <br></br>
                    <input type="text" id="name"  value={user.name} name="name" onChange={hanleChange}/>
                </div>
                <div className="inp">
                    <label htmlFor="email">Email</label>
                    <br></br>
                    <input type="text" id="email"  value={user.email} name="email" onChange={hanleChange}/>
                </div>

                <div className="inp">
                    <label htmlFor="pass">Password</label>
                    <br></br>
                    <input type="password" id="pass"  value={user.password} name="password" onChange={hanleChange}/>
                </div>
                <div className="inp">
                    <button type="submit" style={{color:"skyblue", textAlign:"center",marginLeft:30}}>submit</button>
                </div>
            </form>
        </>
    )
}
export default MultipleInputs