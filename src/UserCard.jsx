import React from 'react';

function UserCard({ user }) {
    const handleViewBlogs = async (userId) => {
        try {
            const response = await fetch(`http://127.0.0.1:3000/blogs/${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch user blogs');
            }
            const data = await response.json();
            console.log(data);
            // Handle displaying user blogs (e.g., redirect to a new page)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="user-card">
            <img src={user.profile_photo} alt={user.username} />
            <h3>{user.username}</h3>
            <button onClick={() => handleViewBlogs(user.id)}>View Blogs</button>
        </div>
    );
}

export default UserCard;
