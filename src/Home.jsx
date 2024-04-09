import { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import Header from './Header';
import UserCard from './UserCard';

function Home() {
    const [blogs, setBlogs] = useState([]);
    const [otherUsers, setOtherUsers] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        // Check if user ID exists in local storage
        const userId = localStorage.getItem('user_id');
        if (!userId) {
            // Redirect to login page if user ID doesn't exist
            window.location.href = '/';
            return; // Prevent further execution of useEffect
        }

        setLoggedIn(true);

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

        const fetchOtherUsers = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:3000/users?user_id=${userId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch other users');
                }
                const data = await response.json();
                console.log(data);
                setOtherUsers(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchBlogs();
        fetchOtherUsers();
    }, []);

    const handleLogout = () => {
        // Clear user ID from local storage
        localStorage.removeItem('user_id');
        // Redirect to login page
        window.location.href = '/';
    };

    if (!loggedIn) {
        return <div>Please login to access the content.</div>;
    }

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

            {/* Other Users */}
            <div>
                <h2>Other Users</h2>
                {otherUsers.map(user => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}

export default Home;
