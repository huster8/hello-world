import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProjectList = ({ projects, title }) => {
    
    

    return (
        <div className="project-list">
            <h2>{ title }</h2>
            {projects.map((project) => (
                <div className="project-preview" key={project.id}>
                    <Link to={`/projects/${project.id}`}>
                        <h3>{ project.title }</h3>
                        <p>developer: { project.authors }</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ProjectList;