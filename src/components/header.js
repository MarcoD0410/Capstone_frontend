import {Link} from "react-router-dom"

const Header = (props) => {
    return (
        <nav className="nav">
            <Link to="/zoo">
                <h1 class=" ">The Zoo</h1>
            </Link>
        </nav>
    )
}

export default Header; 