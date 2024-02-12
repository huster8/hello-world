import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ProjectDetails = () => {
    const { id } = useParams()
    const { data: project, error, isPending } = useFetch('http://localhost:8000/projects/' + id);
    const history = useHistory();

    const handleClick= () =>{
        fetch('http://localhost:8000/projects/' + project.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }

    return ( 
        <div className="project-details">
            { isPending && <div>loading...</div> }
            { error && <div>{ error }</div> }
            { project && (
                <article>
                    <h2>{ project.title }</h2>
                    <h3>developers: { project.authors }</h3>
                    <div>{ project.body }</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default ProjectDetails;