import { Link } from "react-router-dom";

export const Logo = () => {
    return(
        <Link className="navbar-brand" to="/">
            <img src="../img/header-logo.png" alt="Bosa Noga"/>
        </Link>
    )
};

export default Logo;