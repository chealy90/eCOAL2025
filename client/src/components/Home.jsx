import Header from "./Header";
import Detail_home from "./Detail_home";
import { Carousel } from "antd"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import "../css/Home.css"
import HomePopularContainer from "./HomePopularContainer";

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
        <div id="homeContainer">
            <h3>Popular</h3>
            <Carousel>
                {articlesp.map(article => <Detail_home article={article}/>)}
            </Carousel>


            <h3>All</h3>
            <div className="popularContainer">
                <p id="showMore">Show More</p>
                {articles.map(article => <HomePopularContainer article={article}/>)}
            </div>
        </div>
        
        </>
        
    )
}

export default Home
