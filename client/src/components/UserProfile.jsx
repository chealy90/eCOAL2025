//import { Link } from "react-router-dom";
import UserImg from "../assets/user-circle.png"
import Card from "./Card";

function UserProfile() {
    return (
        <div className="col-container">
            <div className="left_col">
                <div className="img-container">
                    <img src={UserImg} alt="User Image" />
                </div>
                <h2>Flying Baguette</h2>
                <Link to={"/new-article"}>Add Article</Link>
                <p>example@email.com</p>

                <div className="about">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </div>

                <div className="liked-posts">
                    <h2>Liked Articles</h2>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default UserProfile;
