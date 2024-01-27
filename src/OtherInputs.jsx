import { useRef, useState } from "react"
import useToggle from "../useToggle"
import FetchData from "./FetchData"

const OtherInputs = () => {
    const [shipping, setShipping] = useState(false)
    const [fremwork, setFremwork] = useState("react")
    const [userDetail, setUserDetail] = useState({})
    
    const [value, setValue] = useState(0)
    const frameworks = ['react', 'angular', 'vue', 'svelte']

    const refContainer = useRef(null);
    const { show, toggle } = useToggle(false)

    const handlechange = (e) => {
        console.log(e)
        setShipping(e.target.checked)
    }
    const handleChangeFremwork = (e) => {
        console.log(e.target.value)
        setFremwork(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(refContainer.current.value)


        let formDat = new FormData(e.currentTarget)
        let inObj = Object.fromEntries(formDat)
        console.log(inObj)
       
        setUserDetail(inObj)
        e.currentTarget.reset();
        setValue(value + 1)
    }



    return (
        <>
            <div>
                <FetchData />

                <h4 style={{ color: 'black', padding: 20, textAlign: "center" }}>Other Inputs</h4>
                <form className="formstyle">
                    <div>
                        <label htmlFor="Freeshipping">Free shipping {shipping ? "Checked" : "Unchecked"}</label> &nbsp;  &nbsp;
                        <input type="checkbox" id="Freeshipping" name="Freeshipping" checked={shipping} onChange={handlechange} />
                    </div>
                    <div>
                        <label htmlFor="Framework"> Selected Frame work {fremwork.toLocaleUpperCase()}</label>  &nbsp;  &nbsp;
                        <select name="fremwork" id="fremwork" value={fremwork} onChange={handleChangeFremwork}>
                            {
                                frameworks.map((Framework) => {
                                    return <option key={Framework}>{Framework}</option>
                                })
                            }
                        </select>
                    </div>
                    
                </form>
            </div>
            <button onClick={() => toggle()}>Toggle</button>
            {show && <div>
                <h4 style={{ color: 'black', padding: 20, textAlign: "center", margin: "auto" }}>Form Date API's</h4>
                <div style={{ display:'flex' }}>
                    <div style={{ width:'600px' }}>
                        <form style={{ color: 'black', padding: 20, marginLeft: 20 }} onSubmit={handleSubmit}>
                            <div className="inp">
                                <label htmlFor="name">Name</label>
                                <br></br>
                                <input type="text" id="name" name="name" ref={refContainer} />
                            </div>
                            <div className="inp">
                                <label htmlFor="email">Email</label>
                                <br></br>
                                <input type="text" id="email" name="email" />
                            </div>

                            <div className="inp">
                                <label htmlFor="password">Password</label>
                                <br></br>
                                <input type="password" id="password" name="password" />
                            </div>
                            <div className="inp">
                                <button type="submit" style={{ color: "skyblue", textAlign: "center", marginLeft: 30 }}>submit</button>
                            </div>
                        </form>
                    </div>
                    <div style={{ width:'400px' }}>
                        {
                            userDetail.name && (<div> 

                                <h2>User Detail</h2>
                                <p>Name :  {userDetail.name}</p>
                                <p>Email :  {userDetail.email}</p>
                            </div>)

                        }
                       
                    </div>
                </div>

            </div>}
        </>
    )
}

export default OtherInputs