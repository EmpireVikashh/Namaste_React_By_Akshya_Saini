import {Link} from "react-router-dom";
const Login = ()=>{
    function handleSubmit(event){
        event.preventDefault();
    }
    
    return(
        <form id="Login-form" onSubmit={handleSubmit}>
        <h1>Before Login Please SignUp</h1>
        <div className="Login-Container">
            <label>Username or Email:</label>
            <input type="text" id="" placeholder="Enter Username"/>
            <label>Password:</label>
            <input type="text" id="" placeholder="Enter Password"/>
            <button type="submit">Login</button>
            <Link to="./" >Forgot Password</Link>
        </div>
        </form>
    )
}
export default Login;