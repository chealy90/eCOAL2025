import Article from './Article.jsx'
import { useState } from 'react'
import styles from './Detail.module.css'
import axios from "axios";
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { CiHeart } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";








function Detail() {

    let params = useParams();
    const [article1, updateArticle1] = useState(null)

    async function getArticle() {
        const article = (await axios.get('http://localhost:8000/api/articles/' + params.id)).data;
        updateArticle1(article)
    }

    useEffect(() => {
        getArticle()
    }, [])

    if (article1 === null)
        return (<div>loading...</div>)

    return (
        <div className={styles.detailArticle}>
            <div className={styles.blockTitle}>
                <h2 className={styles.articleH1}>{article1.title}</h2>
                <div className={styles.blockIcons}>
                    <CiHeart className={styles.icon} />
                    <CiShare2 className={styles.icon} />
                </div>
            </div>
            <p className={styles.articleContent}>{article1.content}</p>
            <img className={styles.imgArticle} src={article1.thumbnailURL} alt={article1.title} />
            {/* {article1.mediaType === "video" ? <video className={styles.videoArticle} controls><source src={article1.mediaURL} type="video/mp4" /></video> : null}
            {article1.mediaType === "audio" ? <audio className={styles.audioArticle} controls><source src={article1.mediaURL} type="audio/mp3" /></audio> : null}
            {article1.mediaType === "image" ? <img className={styles.imgArticle} src={article1.mediaURL} alt={article1.title} /> : null} */}
        </div>
    )
}

export default Detail;