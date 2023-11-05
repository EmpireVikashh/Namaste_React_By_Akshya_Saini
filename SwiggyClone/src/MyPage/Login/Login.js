import {Link} from "react-router-dom";
const Login = () => {
    function handleSubmit(event) {
        event.preventDefault();
    }

    // const [inpValue, setInpValue] = useState("");
    // import { useState } from 'react';
    // <input type="text" value={inpValue} onChange={(e)=>{
    //   setInpValue(e.target.value);

    // }}
    // />

    return (
        <form id="Login-form" onSubmit={handleSubmit}>
            <div id="Login-Container">
            <h1 className="login-child">Login your Account</h1>

                <div className="login-child">
                    <label className="login-child user-email" >Username or Email:</label>
                    <input type="text" id="user" placeholder="Enter Username" />
                </div>

                <div className="login-child">
                    <label className="login-child pass">Password:</label>
                    <input type="text" id="password" placeholder="Enter Password" />
                </div>

                <div className="login-child login_Forgot">
                <button type="submit" id="login">Login</button>
                <label className="forgot-password" >Forgot Password</label>
                {/* <Link to="/">Forgot Password</Link> */}
                </div>


                <div className="dont-account">
                    I don't have an account? <Link to="/signup" ><span>SignUP</span></Link> 
                </div>

            </div>
        </form>
    )
}
export default Login;