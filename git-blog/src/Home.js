const Home = () => {

    const handleClick = (e) => {
        console.log('clicked', e);
    }

    return (
        <div className="home">
            <h2>home</h2>
            <button onClick={handleClick}>click</button>
        </div>
    );
}
 
export default Home;