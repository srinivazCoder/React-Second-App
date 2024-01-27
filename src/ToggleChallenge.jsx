import { useState } from "react";

const ToggleChallenge = () => {
    const [showAlert, setshowAlert] = useState(true)

    return (
        <div>
            <button className="btn btn-primary" onClick={() => setshowAlert(!showAlert)}>Toggle</button>
            <div>
                {showAlert && <Alert />}
            </div>

        </div>
    )
}

const Alert = () => {
    return <div className="alert alert-danger">hello world</div>
}

export default ToggleChallenge;