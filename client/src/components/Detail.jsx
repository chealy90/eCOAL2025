import Article from './Article.jsx'
import { useState } from 'react'
import styles from './Detail.module.css'
import axios from "axios";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';




function Detail() {

    let params = useParams();
    const [article1, updateArticle1] = useState([])

    async function getArticle() {
        const article = (await axios.get('http://localhost:8000/api/articles/' + params.id)).data;
        updateArticle1(article)
    }

    useEffect(() => {
        getArticle()
    })

 
    return (
        <div className={styles.detailArticle}>  
            <div className={styles.blockTitle}>
                <h1 className={styles.articleH1}>{article1.title}</h1>
            </div>
            <p className={styles.articleContent}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit recusandae facere id sit quam earum quos consequatur soluta maiores consequuntur optio cupiditate fugiat blanditiis veritatis molestias, possimus cum aut incidunt.</p>         
            <img className={styles.imgArticle} src="https://www.photobox.fr/content/blog/uploads/2017/06/scene-de-concert-foule-lumieres.jpg?w=1800" />
        </div>
    )
}

export default Detail;