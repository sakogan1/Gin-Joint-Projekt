import {Link} from "react-router-dom";
import "../css/Navbar.css"


const Navbar = () => {
    return ( 
        <nav>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/">ENTERTAINMENT</Link></li>
                <li><Link to="/shop">SHOP</Link> </li>
                <li><Link to="/">EVENTS</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>
        </nav>

     );
}
 
export default Navbar;