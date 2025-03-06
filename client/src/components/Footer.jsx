import axios from "axios";
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react'
import styles from './Footer.module.css'
import { CiHome } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

function Footer() {

    return (
        <div className={styles.pageFooter}>
                <CiSearch className={styles.footerIcon} />
                <CiHome className={styles.footerIcon} />
                <CiUser className={styles.footerIcon} />
        </div>
    )

}

export default Footer;
