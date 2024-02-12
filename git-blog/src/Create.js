import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [authors, setAuthors] = useState('zach huster');
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        const project = { title, body, authors };

        setIsLoading(true)

        fetch('http://localhost:8000/projects', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(project)
        }).then(() => {
            console.log('new project added');
            setIsLoading(false);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>add a new project</h2>
            <form onSubmit={handleSubmit}>
                <label>project title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>project body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>project author:</label>
                <select
                    value={authors}
                    onChange={(e) => setAuthors(e.target.value)}>
                    <option value="zach">zach huster</option>
                </select>
                { !isLoading && <button>add project</button> }
                { isLoading && <button disabled>adding</button> }
            </form>
        </div>
    );
}
 
export default Create;