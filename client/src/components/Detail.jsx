import Article from './Article.jsx'
import { useState } from 'react'
import styles from './Detail.module.css'
import axios from "axios";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';




function Detail(props) {
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
        <div className="overlay" style={{backgroundImage: `url(${props.article.image})` }}>
            <div className={styles.blockTitle}>
                <h1 className={styles.articleH1}>{props.article.title}</h1>
                <div className="articleInfo">
                    <p>{props.article.author}</p>
                    <p>{props.article.postDate}</p>
                </div>
            </div>
            <p className={styles.articleContent}>{cutOffArticle(cleanContent(props.article.content))}</p>         
            
        </div>
        </div>
    )
}

export default Detail;