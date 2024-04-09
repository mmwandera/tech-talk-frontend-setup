import { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import Header from './Header';

function Home() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('http://127.0.0.1:3000/blogs');
                if (!response.ok) {
                    throw new Error('Failed to fetch blogs');
                }
                const data = await response.json();
                console.log(data);
                setBlogs(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchBlogs();
    }, []);

    const handleLogout = () => {
        // Clear user ID from local storage
        localStorage.removeItem('user_id');
        // Redirect to login page
        window.location.href = '/';
    };

    return (
        <div>
            <Header handleLogout={handleLogout} />
            {/* Right Part */}
            <div className="right-section" style={{ width: '70%' }}>
                {/* Search Bar */}
                <div className="search-bar">
                    <input type="text" placeholder="Search blogs" />
                </div>

                {/* Blogs */}
                <h2>Blogs</h2>
                {/* Render blogs */}
                {blogs.map(blog => (
                    <BlogCard key={blog.id} {...blog} />
                ))}
            </div>
        </div>
    );
}

export default Home;
