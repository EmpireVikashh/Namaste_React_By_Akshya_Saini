import {useState} from "react";
const SignUp = ()=>{

    // set all input value from user
    const [user, setUser] = useState({
        name:"",
        email:"",
        mobile:"",
        createPass:"",
        confirmPass:""
    })
    console.log(user);
    // throw error if user put wrong info 
    const [error, setError] = useState("error");

    // Destructure my useState value
    const {name,email,mobile,createPass,confirmPass} = user;
    console.log(name.length);

    const onchangeInputHandle = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})

        // if user enter space at starting
        if(e.target.value === " " && e.target.value.length === 1){
        
            setUser({...user,[e.target.name]:e.target.value.trim()})//used trim() for ignore space at starting
        }
        // console.log(e.target.value);


    }

    const formSubmitHandle = (e)=>{
        e.preventDefault();
        console.log(name, email, mobile, createPass, confirmPass);
        if(name === "" || email === "" || mobile === "" || createPass === "" || confirmPass === "" ){
            console.log("feild required")
        }
    }

    return(
        <form action="" id="signUp-form" onSubmit={formSubmitHandle}>
            <div id="signUp-container">
                
                    <input value={name} placeholder="Name" name="name" id="name" onChange={onchangeInputHandle}/>
            
                    <input value={email} placeholder="Email" name="email" id="email" onChange={onchangeInputHandle}/>
                
                    <input value={mobile} placeholder="Mobile No." name="mobile" id="number" onChange={onchangeInputHandle}/>
            
                    <input value={createPass} placeholder="Create Password" name="createPass" id="password" onChange={onchangeInputHandle}/>
                
                    <input value={confirmPass} placeholder="Confirm Password" name="confirmPass" id="confirm-password" onChange={onchangeInputHandle}/>

                    <div className="error">
                       My error : {error}
                    </div>
                
                    <button className="SignUp-Button">SignUp</button>

                    <div className="already-account">
                         Already have an account? <span>Login</span>
                    </div>

                    <div className="login-with-Google">Login with Google</div>
            </div>
        </form>
        
    )
}
export default SignUp;