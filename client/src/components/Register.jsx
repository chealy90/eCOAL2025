import React from "react";
import { Link } from "react-router";
import axios from "axios";
import styles from "./Register.module.css"
import { useNavigate } from "react-router";

function Register(props) {

    console.log(props.setCookie)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const password2 = e.target.password2.value;

        if (password !== password2) {
            alert("Passwords do not match");
        }

        const result = await axios.post('http://localhost:8000/api/register', {
            name: name,
            email: email,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        
        if(result.status == 200) {
            props.setCookie("mycookie", {name: result.data.name, token: result.data.token}, "/")
            navigate('/')
            console.log(result)
        }
    }


    return (
        <div className={styles.register}>
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input type="text" name="name" placeholder='Name' />
                <input type="text" name="email" placeholder='Email' />
                <input type="password" name="password" placeholder='Password' />
                <input type="password" name="password2" placeholder='Confirm password' />
                <button type="submit">Sign up</button>
            </form>
            <p>Already have an account? <Link to={"/login"}>Log in</Link></p>
        </div>
    )
}

export default Register;