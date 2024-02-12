import ProjectList from './ProjectList';
import useFetch from "./useFetch";


const Home = () => {
  const { data: projects, isLoading, error } = useFetch('http://localhost:8000/projects')


    return (
        <div className="home">
          { error && <div> { error } </div> }
          { isLoading && <div> loading...</div> }
          { projects && <ProjectList projects={projects} title="projects: "/>  }
        </div>
    );
}
 
export default Home;