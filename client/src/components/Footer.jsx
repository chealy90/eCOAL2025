import axios from "axios";
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react'
import styles from './Footer.module.css'
import { CiHome } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router';

function Footer(props) {

    return (
        <div className={styles.pageFooter}>
                <Link to="/search"><CiSearch className={styles.footerIcon} /></Link>
                <Link to="/home"><CiHome className={styles.footerIcon} /></Link>
                { props.cookies?.mycookie ?
                     <Link to="/profile"><CiUser className={styles.footerIcon} /></Link> 
                     : 
                     <Link to="/login"><CiUser className={styles.footerIcon} /></Link>


                }
        </div>
    )

}

export default Footer;
