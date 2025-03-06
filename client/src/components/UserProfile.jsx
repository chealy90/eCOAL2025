
import { Link } from "react-router";

import UserImg from "../assets/user-circle.png"
import Card from "./Card";
import styles from './UserProfile.module.css'

function UserProfile() {
    return (
        <div className={styles.col_container}>
                <div className={styles.img_container}>
                    <img className={styles.imgUser} src={UserImg} alt="User Image" />
                    <h2 className={styles.userName}>Flying Baguette</h2>
                </div>
                <p>example@email.com</p>
                <Link className={styles.lien} to={"/new-article"}>+ Add Article</Link>
        


                <div className={styles.liked_posts}>
                    <h2>Liked Articles</h2>
                </div>
        </div>
    )
}

export default UserProfile;
