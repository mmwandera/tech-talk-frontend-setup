import BlogCard from './BlogCard'; // Assuming you also want to display blogs in the profile page
import Header from './Header';

function Profile() {
    // Sample data for demonstration
    const user = {
        username: 'JohnDoe',
        profilePhoto: 'profile.jpg',
        numFollowers: 500,
        // Add more user data as needed
    };

    const userBlogs = [
        { id: 1, thumbnail: 'blog1.jpg', title: 'Blog 1', author: 'JohnDoe', dateCreated: '2024-03-29', numLikes: 50, numComments: 10, previewContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 2, thumbnail: 'blog2.jpg', title: 'Blog 2', author: 'JohnDoe', dateCreated: '2024-03-28', numLikes: 30, numComments: 5, previewContent: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        // Add more user blogs as needed
    ];

    return (
        <div>
            {/* Header */}
            <Header />

            {/* Main Section */}
            <main>
                <div className="profile-info">
                    <img src={user.profilePhoto} alt="User Profile" />
                    <h2>{user.username}</h2>
                    <p>Followers: {user.numFollowers}</p>
                    {/* Add more user information here */}
                </div>

                {/* User's Blogs */}
                <div className="user-blogs">
                    <h2>Your Blogs</h2>
                    {/* Render user's blogs */}
                    {userBlogs.map(blog => (
                        <BlogCard key={blog.id} {...blog} />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Profile;
