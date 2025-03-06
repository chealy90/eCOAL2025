import { Link } from "react-router"
import "../css/Header.css"
const Header = () => {
    return (
        <div className="pageHeader">
            <h1><Link to={'/'}>THE PIT</Link></h1>
        </div>
    )
}

export default Header