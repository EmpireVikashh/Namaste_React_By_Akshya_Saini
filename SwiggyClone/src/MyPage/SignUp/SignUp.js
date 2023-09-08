const SignUp = ()=>{
    return(
        <form action="" id="signUp-form">
            <div id="signUp-container">
                
                    <input type="text" placeholder="Name" name="" id="name"/>
            
                    <input type="text" placeholder="Email" name="" id="email"/>
                
                    <input type="text" placeholder="Mobile No." name="" id="number"/>
            
                    <input type="text"placeholder="Create Password" name="" id="password"/>
                
                    <input type="text" placeholder="Confirm Password" name="" id="confirm-password"/>
                
                    <button id="SignUp-Button" >SignUp</button>

                    <div className="signUp-Child">
                         Already have an account? <span>Login</span>
                    </div>

                    <div id="login-with0">Login with google</div>
            </div>
        </form>
        
    )
}
export default SignUp;