import styles from './Article.module.css'
import { useState } from 'react'
import { Route, Link, Routes } from "react-router"
import { useEffect } from 'react';
import axios from "axios";


function Article() {

    const [articlesList, updateArticlesList] = useState([])
    async function getArticleList() {
        const article = (await axios.get('http://localhost:8000/api/articles')).data;
        updateArticlesList(article)
    }

    useEffect(() => { // this is a hook called everytime the function is rendered again
        // Don't forget to import useEffect
        getArticleList()
    }, []);



    return (
        <>
            {articlesList.map(e => (
                <Link to={"/detail/"+e.id} key={e.id}>
                    <div className={styles.article} style={{ backgroundImage: "url(" + "https://www.photobox.fr/content/blog/uploads/2017/06/scene-de-concert-foule-lumieres.jpg?w=1800" + ")" }}>
                        <div className={styles.titleBox}>
                            <h1>{e.title}</h1>
                            <p> John Doe</p>
                        </div>
                        <p>{e.content}</p>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default Article;