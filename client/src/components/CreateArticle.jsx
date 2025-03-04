import Header from "./Header"
const CreateArticle = () => {


    return (
            <div>
            <div className="formContainer">
                <form action="">
                    <h2>+ Add a new article</h2>
                    <input type="text" 
                        name="articleName" 
                        id="articleNameInput" 
                        clasName="textInput" 
                        placeholder="Title"
                    />

                    <textarea name="articleContent" 
                        id="articleContentInput"
                        placeholder="Content">
                    </textarea>

                    <input type="text"
                        name="thumbnail" 
                        id="articleThumbnailInput"
                        placeholder="Add a thumbnail"
                    />


                    <div>
                        <input type="text" name="tags" id="tagsInput" placeholder="Add tags"/>
                    </div>

                    <button type="submit">Create Article</button>

                </form>
            </div>
            </div>)
    
}

export default CreateArticle