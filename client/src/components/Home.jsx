import Header from "./Header";
import Detail from "./Detail";
import { Carousel } from "antd"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import "../css/Home.css"
import HomePopularContainer from "./HomePopularContainer";

const Home = () => {
    /*
    const [articles, updateArticles] = useState([])
    useEffect(()=>{axios.get(`http://localhost:8000/api/articles`)
                    .then(res => {
                        console.log(res)
                        updateArticles(res.data)
                    })
    }, [])
    */


    const popularContainer = 
    <div class="popularCard">
        <h4></h4>
        <div>
            <p>13/</p>
        </div>
    </div>



    const articles = [
        {
          title: "Billie Eilish",
          content: "Billie Eilish delivered an exquisite 90-minute concert at the Rod Laver Arena, showcasing her extraordinary talent and stage presence. The sophisticated 360-degree stage featured impressive technological enhancements, including LED video floors and a floating platform. Despite these spectacular elements, Eilish maintained the concert's focus on her profound music, seamlessly transitioning between energetic raves and introspective moments. Her genuine connection with fans fostered a sense of mutual respect and admiration.",
          image: "https://www.photobox.fr/content/blog/uploads/2017/06/scene-de-concert-foule-lumieres.jpg?w=1800",
          author: "Emily Thompson",
          postDate: "March 4, 2025"
        },
        {
          title: "Lola Young",
          content: "Lola Young, a 24-year-old British pop star, captivated the audience at the Forum in north London with a charismatic yet chaotic performance. Her eclectic set included rock anthems, punky ska, and soulful ballads, with songs like 'You Noticed' and 'Big Brown Eyes' standing out. Despite a disorganized stage presence and candidness about her struggles with schizoaffective disorder, Young's genuine connection with her audience and distinctive music make her a rising star to watch.",
          image: "https://www.photobox.fr/content/blog/uploads/2017/06/scene-de-concert-foule-lumieres.jpg?w=1800",
          author: "James Carter",
          postDate: "March 3, 2025"
        },
        {
          title: "Kylie Minogue",
          content: "Kylie Minogue dazzled fans during the opening of her 'Tension' world tour at Sydney's Olympic Park. She delivered iconic hits like 'Lights Camera Action' and 'Confide in Me,' showcasing her energy and passion for music. Despite some complaints about scheduling conflicts with the Mardi Gras parade, the enthusiasm was immense among the 14,000 attendees.",
          image: "https://www.photobox.fr/content/blog/uploads/2017/06/scene-de-concert-foule-lumieres.jpg?w=1800",
          author: "Sarah Williams",
          postDate: "March 2, 2025"
        },
        {
          title: "Bob Dylan",
          content: "Bob Dylan's 'Rough and Rowdy Ways' tour has received rave reviews from critics. His ability to bring intimacy to the arena stage, transforming acoustic numbers into arena-rocking power ballads, has been widely praised. Dylan's performances showcase his profound music and significant contributions to the pop landscape.",
          image: "https://www.photobox.fr/content/blog/uploads/2017/06/scene-de-concert-foule-lumieres.jpg?w=1800",
          author: "Michael Roberts",
          postDate: "March 1, 2025"
        }
    ]      

    const popularArticles = [
        {
            title: "Best concert",
            author: "John Doe",
            date: "03/03/2025"
        },
        {
            title: "This was insane",
            author: "Max Mustermann",
            date: "04/03/2025"
        },
        {
            title: "A night to remember",
            author: "Juan Gonzalez",
            date: "02/03/2025"
        }
    ]
      
      
      

    return (
        <>
        <div id="homeContainer">
            <h3>Home</h3>
            <Carousel>
                {articles.map(article => <Detail article={article}/>)}
            </Carousel>


            <h3>Popular</h3>
            <div className="popularContainer">
                <p id="showMore">Show More</p>
                {popularArticles.map(article => <HomePopularContainer article={article}/>)}
            </div>
        </div>
        
        </>
        
    )
}

export default Home