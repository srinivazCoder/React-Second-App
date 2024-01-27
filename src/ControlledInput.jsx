import { useState } from "react";

const ControlledInput =()=>{

    const [name, Setname] = useState('');
    const [email, Setemail] = useState('');

    const HandleSubmit=(e)=>{
        e.preventDefault();
        
        console.log(name,email)
    }
    return (
       <form className="form" onSubmit={HandleSubmit}>
            <h4>Controlled inputs</h4>
            <div className="form-row">
                <label htmlFor="name" className="form-label">name</label>
                <br>
                </br>
                <input type="text" id="name" className="form-input" value={name} onChange={(e)=>Setname(e.target.value)}/>
            </div>
            <div className="form-row">
                <label htmlFor="email" className="form-label">email</label>
                <br>
                </br>
                <input type="email" id="email" className="form-input" value={email} onChange={(e)=>Setemail(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-block">submit</button>
       </form>
    )
}

export default ControlledInput;