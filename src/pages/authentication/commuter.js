import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import './form.css'
import LoginBtn from "../../components/loginBtn";


const Commuters = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    return(
       
        <div className="loginContainer">
              
                <h2>Login</h2>
                   <div className="loginForm">
                   <label>Email</label>
                    <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                    <LoginBtn user={email} pass={password}/>
                    <Link to="/register">Don't have an account?</Link>
                   </div>

        </div>

    )

}

export default Commuters;