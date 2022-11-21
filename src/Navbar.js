import Logo from "./logo.svg";
import "./index.css";

export default function Navbar(){
    return(
        <nav className="navbar">
            <img src={Logo} className="nav-logo"/>
            <h1 className="nav-text">my travel journel.</h1>
        </nav>
    )
}