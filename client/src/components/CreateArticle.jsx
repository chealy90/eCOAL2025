import Header from "./Header"
import "../css/CreateArticle.css"
import { useState } from "react"
const CreateArticle = () => {

    const [formValues, setFormValues] = useState({articleName: "",
                                                    articleContent: "",
                                                    articleThumbnail: "",
                                                    articleTags: ""
    })


    
    const submitArticle = (e) => {
        e.preventDefault()
        console.log("submitting")
    }

    return (
            <div id="createArticleContainer">
                <form onSubmit={e=>{submitArticle(e)}} onChange={e=>setFormValues({...formValues, [e.target.name]: e.target.value})}>
                    <h3>+ ADD A NEW ARTICLE</h3>
                    <input type="text" 
                        name="articleName" 
                        id="articleNameInput" 
                        clasName="textInput" 
                        placeholder="Title"
                        value={formValues.articleName}
                    />

                    <textarea name="articleContent" 
                        id="articleContentInput"
                        placeholder="Content"
                        value={formValues.articleContent}>
                        
                    </textarea>

                    <input type="text"
                        name="thumbnail" 
                        id="articleThumbnailInput"
                        placeholder="Add a thumbnail"
                        value={formValues.articleThumbnail}
                    />


                    <div>
                        <input type="text" name="tags" id="tagsInput" placeholder="Add tags" value={formValues.articleTags}/>
                    </div>

                    <button type="submit" >CREATE ARTICLE</button>

                </form>
            </div>)
    
}

export default CreateArticle