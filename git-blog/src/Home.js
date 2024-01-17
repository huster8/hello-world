import { useState, useEffect } from "react";
import BlogList from './BlogList';

const Home = () => {
    const[blogs, setBlogs] = useState([
        { title: 'tech elevator final capstone', 
          body: 'full-stack functioning application using Java, JavaScript, SQL, Geoapify, and bootstrap. Allows users to discover landmarks in an area (Cincinnati in this case). Established area of landmarks, registered them to a database, and used Geoapify to map out a route to each location. Front-end was built using Visual Studio Code with the Vue framework and Bootstrap for styling.', 
          authors: 'zach huster, jason snoddy, david boyd, ashton little',
          id: 1 },
        { title: 'project portfolio', 
          body: 'portfolio of completed coding projects completed using Visual Studio Code and React framework.',
          authors: 'zach huster',
          id: 2 },
      ]);

      const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);
      }

      useEffect(() => {
        console.log('use effect ran')
        console.log(blogs);

      })

    return (
        <div className="home">
            <BlogList blogs={blogs} title="projects: " handleDelete={handleDelete}/>
        
            
        </div>
    );
}
 
export default Home;