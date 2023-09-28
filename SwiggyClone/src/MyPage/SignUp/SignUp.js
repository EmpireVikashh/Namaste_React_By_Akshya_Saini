import { Link } from "react-router-dom";
import { useState } from "react";
const SignUp = () => {
    // set all input value from user
    const [user, setUser] = useState({
        name: "",
        email: "",
        mobile: "",
        createPass: "",
        confirmPass: "",
    });
    // console.log(user);

    // throw error if user put wrong info
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Destructure my useState value
    const { name, email, mobile, createPass, confirmPass } = user;
    // console.log(user);

    const onchangeInputHandle = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });

        // if user enter space at starting
        if (e.target.value === " ") {
            setUser({ ...user, [e.target.name]: e.target.value.trim() }); //used trim() for ignore space at starting
        }

    };

    const formSubmitHandle = (e) => {
        e.preventDefault();
        console.log(name, email, mobile, createPass, confirmPass);
        if (
            name === "" ||
            email === "" ||
            mobile === "" ||
            createPass === "" ||
            confirmPass === ""
        ) {
            // console.log("feild required");
            return  setError("field all input")
        }

        else if(name.length < 3 || name.length > 30){
            setSuccess("")
           return  setError("Name should be min 3 char and max 30 char")
            
        }
        else if(!email.includes("@") || !email.includes(".")){
            setSuccess("")
            return setError("Email should contain @ and .")
        } 
        else if(mobile.length < 10){
            setSuccess("")
            return setError("Mobile number must should be 10 digit")
        }
        else if(!(/^[0-9]+$/.test(mobile))){
            setSuccess("")
            return setError("Mobile cannot be alphabet")
        }

        else if(createPass.length < 8 || createPass.length > 15){
            setSuccess("")
            return setError("Password should be min 8 char and max 15 char")
        }
        else if(createPass !== confirmPass){
            setSuccess("")
            return setError("Password and Confirm Password should be same")
        }

        setSuccess("User Registered Successfully")
        setError("")
    };

    return (
        
        <form action="" id="signUp-form" onSubmit={formSubmitHandle}>
            <div id="signUp-container">
                <input
                    value={name}
                    placeholder="Name"
                    name="name"
                    id="name"
                    onChange={onchangeInputHandle}
                />

                <input
                    value={email}
                    placeholder="Email"
                    name="email"
                    id="email"
                    onChange={onchangeInputHandle}
                />

                <input
                    value={mobile}
                    placeholder="Mobile No."
                    name="mobile"
                    id="number"
                    onChange={onchangeInputHandle}
                />

                <input
                    value={createPass}
                    placeholder="Create Password"
                    name="createPass"
                    id="password"
                    onChange={onchangeInputHandle}
                />

                <input
                    value={confirmPass}
                    placeholder="Confirm Password"
                    name="confirmPass"
                    id="confirm-password"
                    onChange={onchangeInputHandle}
                />

                <div className="error">{error} {success}</div>

                <button className="SignUp-Button">SignUp</button>

                <div className="already-account">
                    Already have an account? <Link to="/login" ><span>Login</span></Link> 
                </div>

                <div className="login-with-Google">Login with Google</div>
            </div>
        </form>
        
    );
};
export default SignUp;
