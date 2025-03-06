import "../css/HomePopularContainer.css"

const HomePopularContainer = props => {
    function formatDate(date) {
        const d = new Date(date);
        return d.toLocaleDateString()
    } 

    return (
        <div class="homePopularContainer">
            <h4>{props.article.title}</h4>
            <div>
                <p>{props.article.updated_at ? formatDate(props.article.updated_at) : formatDate(props.article.created_at)}</p>
            </div>
        </div>
    )
}

export default HomePopularContainer