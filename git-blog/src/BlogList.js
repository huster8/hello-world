const BlogList = ({ blogs, title, handleDelete }) => {
    
    

    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h3>{ blog.title }</h3>
                    <p>developer: { blog.authors }</p>
                    <button onClick={() => handleDelete(blog.id)}
                                    style={{
                                        color: "white",
                                        backgroundColor: "#f10b91",
                                        borderRadius: "8px",
                                        hover: '#FFB721'
                                    }}
                    >delete</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;