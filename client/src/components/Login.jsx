import Header from "./Header";
import { useState } from "react";
import "../css/Login.css"


const Login = () => {
    const [formValues, updateFormValues] = useState({username: "", password: ""})


    const login =(e)=>{
        e.preventDefault()
        console.log("username:" + formValues.username)
        console.log("password:" + formValues.password)
        console.log("logged in")
    }

    return (
        <>
            <Header />

            <div class="loginFormContainer">
                <form action="#" onSubmit={login} onChange={e=>{updateFormValues({...formValues, [e.target.name]: e.target.value})}}>
                    <h3>Log In</h3>
                    <input type="text" 
                        name="username" 
                        id="usernameInput"
                        placeholder="Username"
                        value={formValues.username}
                    />


                    <input type="password"
                        name="password" 
                        id="passwordInput" 
                        placeholder="Password"
                        value={formValues.password}
                    />

                    <button type="submit">Log In</button>

                    <p>Don't have an account? Sign up</p>
                </form>
            </div>
        </>
    )
}

export default Login