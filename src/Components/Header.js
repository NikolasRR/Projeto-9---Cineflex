import {Link} from "react-router-dom";

function Header () {
    return (
        <header className="Header" >
            <Link style={{textDecoration: 'none', color:"inherit"}} to="/">CINEFLEX</Link>
        </header>
    );
}

export default Header;