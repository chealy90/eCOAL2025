import "../css/HomePopularContainer.css"

const HomePopularContainer = props => {


    return (
        <div class="homePopularContainer">
            <h4>{props.article.title}</h4>
            <div>
                <p>{props.article.date}</p>
                <p>{props.article.author}</p>
            </div>
        </div>
    )
}

export default HomePopularContainer