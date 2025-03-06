import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import styles from './Login.module.css';
import {useNavigate} from 'react-router';


function Login(props) {
    
    
    console.log(props.setCookie)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const result = await axios.post('http://localhost:8000/api/login', {
            email: email,
            password: password
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        if(result.status == 200) {
            props.setCookie("mycookie", {name: result.data.name, token: result.data.access_token}, "/")
            navigate('/')
            console.log("result",result)
        }


    }

    return (
        <div className={styles.login}>
            <h1>Log in</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input type="text" name="email" placeholder='Email' />
                <input type="password" name="password" placeholder='Password' />
                <button type="submit">Log in</button>
            </form>
            <p>Don't have an account? <Link to={"/register"}>Sign up</Link></p>
        </div>
    )
}

export default Login;

