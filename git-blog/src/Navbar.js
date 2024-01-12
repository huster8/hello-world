const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>the code projects</h1>
            <div className="links">
                <a href="/">home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>new project</a>
            </div>
        </nav>
    );
}
 
export default Navbar;