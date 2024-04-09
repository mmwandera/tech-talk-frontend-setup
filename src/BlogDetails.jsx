import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function BlogDetails() {
    const location = useLocation();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlogDetails = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:3000/blog-details/${location.state.blogId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch blog details');
                }
                const data = await response.json();
                setBlog(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchBlogDetails();
    }, [location.state.blogId]);

    return (
        <div>
            <h2>Blog Details</h2>
            {blog ? (
                <div>
                    <h3>{blog.title}</h3>
                    <p>Content: {blog.content}</p>
                    <p>Author: {blog.author.username}</p>
                    <p>Created At: {blog.created_at}</p>
                    {/* Add other details as needed */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default BlogDetails;
