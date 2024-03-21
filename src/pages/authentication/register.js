import { useState } from "react"
import {handleInsert} from "../../backend/insert"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const RegisterCommuter = () => {
    const history = useHistory()
    const [data, setData] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const cta = () => {
        const newData = {name, email, password}
        handleInsert(newData, setData, "http://localhost:1001/commuters")
        history.goBack()
    }


    return(
         <div className="loginContainer">
                <div className="loginForm">
                <h2>Register</h2>
                    <label>Full Name</label>
                    <input type="text" name="text" onChange={(e) => setName(e.target.value)} />
                    <label>Email</label>
                    <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />  
                    <button onClick={cta}>Register</button>
                </div>
        </div>
    )

}

export default RegisterCommuter;