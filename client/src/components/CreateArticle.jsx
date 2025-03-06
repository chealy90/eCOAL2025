import Header from "./Header"
import "../css/CreateArticle.css"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"



function CreateArticle() {
    const navigate = useNavigate()

    const UPLOAD_ENDPOINT = "http://127.0.0.1:8000/api/articles";
    const [title, setTitle] = useState("");
    const[content, setContent] = useState("");
    const[thumbnailURL, setThumbnailURL] = useState(null);
    const[leadStory, setLeadStory] = useState("");
    const[mediaType, setMediaType] = useState("");
    const[mediaURL, setMediaURL] = useState(null);
    const [status, setStatus] = useState("");
    const [tags, setTags] = useState("");

    const submitArticle = async (event) => {
        setStatus(""); // Reset status
        event.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("thumbnailURL", thumbnailURL);
        formData.append("leadStory", leadStory);
        formData.append("mediaType", mediaType);
        formData.append("mediaURL", mediaURL);
        formData.append("tags", tags);


        const resp = await axios.post(UPLOAD_ENDPOINT, formData, {
            headers: {
                "content-type": "multipart/form-data",
            },
        });
        setStatus(resp.status === 201 ? "OK" : "Error.");
    };

    if (status == "OK") {
        navigate("/");
    }
    return (
    <div id="createArticleContainer">
        <form onSubmit={submitArticle}>
            <h3 id="h3_add">+ ADD A NEW ARTICLE</h3>
            <input type="text"
                name="title"
                id="articleNameInput"
                className="input1"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)} value={title}
            />

            <textarea name="content"
                id="articleContentInput"
                placeholder="Content"
                className="input1"
                onChange={(e) => setContent(e.target.value)} value={content}>
            </textarea>

            <input type="file"
                name="thumbnailURL"
                id="articleThumbnailInput"
                accept="image/*" onChange={(e) => setThumbnailURL(e.target.files[0])} />

            <div className="leadStoryContainer">
                <input type="checkbox" id="articleLeadStory" name="leadStory" onChange={(e) => setLeadStory(e.target.value)} value={1}/>
                <label htmlFor="leadStory">Display on Home Page</label>
            </div>

            <div className="mediaTypeContainer">
                <input type="radio" name="mediaType" id="mediaInput" value="image" onChange={(e) => setMediaType("image")} />
                <label htmlFor="mediaInput">Image</label>
                <input type="radio" name="mediaType" id="mediaInput" value="video" onChange={(e) => setMediaType("video")}/>
                <label htmlFor="mediaInput">Video</label>
                <input type="radio" name="mediaType" id="mediaInput" value="audio" onChange={(e) => setMediaType("audio")}/>
                <label htmlFor="mediaInput">Audio</label>
            </div>

            <input type="file" name="mediaURL" id="mediaURLInput" accept="image/*, video/*, audio/*" onChange={(e) => setMediaURL(e.target.files[0])}/>

            <div>
                <input type="text" name="tags" className="input1" placeholder="Add tags" onChange={(e) => setTags(e.target.value)} value={tags}/>
            </div>

            <button type="submit">Create a new article</button>

        </form>
    </div>
    )
}

export default CreateArticle