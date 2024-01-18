const BlogList = ({ blogs, title }) => {
    
    

    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h3>{ blog.title }</h3>
                    <p>developer: { blog.authors }</p>
                    
                </div>
            ))}
        </div>
    );
}

export default BlogList;