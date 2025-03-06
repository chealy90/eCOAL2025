import Header from "./Header";
import Detail_home from "./Detail_home";
import { Carousel } from "antd"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import "../css/Home.css"
import styles from "./Home.module.css"
import HomePopularContainer from "./HomePopularContainer";
import { Link } from "react-router"

const Home = () => {
    
    const [articles, setArticles] = useState([])

    async function getArticles() {  // The function is asynchronous
        const articles = (await axios.get('http://localhost:8000/api/articles')).data
        console.log(articles)
        setArticles(articles)
    }

    useEffect(() => { // this is a hook called everytime the function is rendered again
        // Don't forget to import useEffect
        getArticles()
    }, [])

    const popularContainer = 
    <div class="popularCard">
        <h4></h4>
        <div>
            <p>13/</p>
        </div>
    </div>

const [articlesp, setArticlesp] = useState([])

    async function getArticlesp() {  // The function is asynchronous
        const articlesp = (await axios.get('http://localhost:8000/api/articles/popular')).data
        setArticlesp(articlesp)
    }

    useEffect(() => { // this is a hook called everytime the function is rendered again
        // Don't forget to import useEffect
        getArticlesp()
    }, [])
      
      

    return (
        <>
        <div className={styles.homeContainer}>
            <h3 className={styles.h3home}>Popular</h3>
            <Carousel>
                {articlesp.map(article => <Link className={styles.homeLien} to={"/detail/"+article.id}><Detail_home article={article}/></Link>)}
            </Carousel>


            <h3>All</h3>
            <div className={styles.popularContainer}>
                <p id="showMore">Show More</p>
                {articles.map(article => <Link className={styles.homeLien} to={"/detail/"+article.id}><HomePopularContainer article={article}/></Link>)}
            </div>
        </div>
        
        </>
        
    )
}

export default Home
