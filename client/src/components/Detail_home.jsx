import Article from './Article.jsx'
import { useState } from 'react'
import styles from './Detail_home.module.css'
import axios from "axios";
import { useEffect } from 'react';
import { useParams } from 'react-router';




function Detail_home(props) {
    /*
    let params = useParams();
    const [article1, updateArticle1] = useState([])

    async function getArticle() {
        const article = (await axios.get('http://localhost:8000/api/articles/' + params.id)).data;
        updateArticle1(props.article)
    }

    useEffect(() => {
        getArticle()
    })
        */

    function formatDate(date) {
        const d = new Date(date);
        return d.toLocaleDateString()
    } 

    const cleanContent = (text) => {
        let cleanedText = text.replace(/:contentReference\[.*?\]/g, '').trim()
        cleanedText = cleanedText.replace(/{index=\d}/g, '').trim()

        return cleanedText
    };

    const cutOffArticle = article => {
        if (article.length  > 150){
            return article.substring(0, 149) + "..."
        } else {
            return article
        }
    }



    

 
    return (
        <div className={styles.detailArticle}>  
        <div className={styles.overlay} style={{backgroundImage: `url(${props.article.thumbnailURL})` }}>
            <div className={styles.blockTitle}>
                <h1 className={styles.articleH1}>{props.article.title}</h1>
            </div>
            <p className={styles.articleContent}>{props.article.content}</p>         
            
        </div>
        </div>
    )
}

export default Detail_home;