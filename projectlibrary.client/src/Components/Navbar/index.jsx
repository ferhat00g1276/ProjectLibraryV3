//import { Link } from "react-router-dom";

//const Navbar = () => {

//    return (
//        <>
//            <nav className="navbar navbar-expand-lg bg-body-tertiary">
//                <div className="container-fluid">
//                    <div className="collapse navbar-collapse" id="navbarNav">
//                        <ul className="navbar-nav mx-auto ">
//                            <li className="nav-item">
//                                <a className="nav-link active" aria-current="page" href="#">About us</a>
//                            </li>
//                            <li className="nav-item">
//                                <a className="nav-link" href="#"> Books</a>
//                            </li>
//                            <li className="nav-item">
//                                <a className="nav-link" href="#">Writers</a>
//                            </li>
//                            <li className="nav-item">
//                                <a className="nav-link" href="#"></a>
//                            </li>
//                        </ul>
//                    </div>
//                </div>
//            </nav>
//        </>
//    );
//};

//export default Navbar;
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";


const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <nav style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
            <Link to="/">Home</Link>
            <Link to="/auth">{user ? "Dashboard" : "Login/Register"}</Link>
            {user && (
                <>
                    <span>Welcome, {user.fullName || user.email}!</span>
                    <button onClick={logout}>Logout</button>
                </>
            )}
        </nav>
    );
};

export default Navbar;