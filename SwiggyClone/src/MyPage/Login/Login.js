// import {Link} from "react-router-dom";
const Login = ()=>{
    function handleSubmit(event){
        event.preventDefault();
    }
    
    // const [inpValue, setInpValue] = useState("");
    // import { useState } from 'react';
    // <input type="text" value={inpValue} onChange={(e)=>{
    //   setInpValue(e.target.value);
    
    // }}
    // />

    return(
        <form id="Login-form" onSubmit={handleSubmit}>
        <h1>Before Login Please SignUp</h1>
        <div id="Login-Container">

            <label className="login-child user-email" >Username or Email:</label>
            <input type="text" id="user" className="login-child" placeholder="Enter Username"/>

            <label className="login-child pass">Password:</label>
            <input type="text" id="password" className="login-child" placeholder="Enter Password"/>

            <button type="submit" id="login" className="login-child">Login</button>

            <label className="login-child">Forgot Password</label>
            {/* <Link to="/">Forgot Password</Link> */}
            
        </div>
        </form>
    )
}
export default Login;