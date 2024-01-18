import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>coding portfolio</h1>
            <div className="links">
                <Link to="/">home</Link>
                <Link to="/create">new project</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;