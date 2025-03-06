import axios from "axios";
import { Link } from "react-router";
import React from 'react';
import UserImg from "../assets/user-circle.png"
import Card from "./Card";
import styles from './UserProfile.module.css'
import { useCookies } from 'react-cookie'
import { useEffect } from "react";


function UserProfile(props) {

    const [profile, setProfile] = React.useState({})

    async function getProfile() {
        try {
            console.log("cookies", props.cookies.mycookie?.token)
            if (props.cookies?.mycookie) {
                console.log("djfmqjfmqjm")
                const response = await axios.get(
                    "http://localhost:8000/api/user",
                    {
                    headers: { Authorization: "Bearer " + props.cookies.mycookie?.token, 'Accept': 'application/json' }
                })
                console.log("data", response.data)
                setProfile(response.data)
            }
        } catch (error) {
            console.log("error", error);
        } // The function is asynchronous

    }

    useEffect(() => { // this is a hook called everytime the function is rendered again
        // Don't forget to import useEffect
        getProfile()
    }, [])


    return (
        <div className={styles.col_container}>
            <div className={styles.img_container}>
                <img className={styles.imgUser} src={UserImg} alt="User Image" />
                <h2 className={styles.userName}>{profile?.name}</h2>
            </div>
            <p>{profile?.email}</p>
            <Link className={styles.lien} to={"/new-article"}>+ Add Article</Link>



            <div className={styles.liked_posts}>
                <h2>Liked Articles</h2>
            </div>
        </div>
    )
}

export default UserProfile;
