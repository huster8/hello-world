import { useState } from "react";
import { useHistory } from "react-router-dom";
import AWS from 'aws-sdk';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [authors, setAuthors] = useState('zach huster');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const [file, setFile] = useState(null);
    const [fileURL, setFileURL] = useState('');

    // Configure AWS SDK
    AWS.config.update({
        accessKeyId: 'NOT_ADDING_KEY',
        secretAccessKey: 'NOT_ADDING_SECRET_ACCESS_KEY',
        region: 'MY_REGION'
    });

    const s3 = new AWS.S3();

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setFile({
                    name: selectedFile.name,
                    type: selectedFile.type,
                    dataURL: event.target.result
                });
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const uploadFileToS3 = async (file) => {
        const params = {
            Bucket: 'MY_BUCKET_NAME',
            Key: file.name,
            Body: file.dataURL,
            ContentType: file.type,
            ACL: 'public-read'
        };
        try {
            const data = await s3.upload(params).promise();
            return data.Location; 
        } catch (err) {
            console.error("Error uploading file: ", err);
            throw err;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const fileURL = await uploadFileToS3(file);
            setFileURL(fileURL);

            const project = { title, body, authors, fileURL };

            const projects = JSON.parse(localStorage.getItem('projects')) || [];
            projects.push(project);
            localStorage.setItem('projects', JSON.stringify(projects));

            await fetch('http://localhost:8000/projects', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(project)
            });

            console.log('new project added');
            setIsLoading(false);
            history.push('/');
        } catch (err) {
            console.error("Error uploading project: ", err);
            setIsLoading(false);
        }
    };

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
                <label>upload image:</label>
                <input
                    type="file"
                    onChange={handleFileChange}
                />
                {file && (
                    <img src={file.dataURL}
                            style={{ display: 'block', maxWidth: '100%' , marginTop: '10px', marginBottom: '10px' }}
                    />
                )}
                {!isLoading && <button>add project</button>}
                {isLoading && <button disabled>adding</button>}
            </form>
        </div>
    );
};

export default Create;