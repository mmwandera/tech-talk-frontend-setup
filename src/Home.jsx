import BlogCard from './BlogCard';
import Header from './Header';
import UserCard from './UserCard';

function Home() {
    // Sample data for demonstration
    const recommendedUsers = [
        { id: 1, profilePhoto: 'user1.jpg', username: 'user1', numFollowers: 100 },
        { id: 2, profilePhoto: 'user2.jpg', username: 'user2', numFollowers: 200 },
        // Add more recommended users as needed
    ];

    const blogs = [
        { id: 1, thumbnail: 'blog1.jpg', title: 'Blog 1', author: 'Author 1', dateCreated: '2024-03-29', numLikes: 50, numComments: 10, previewContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 2, thumbnail: 'blog2.jpg', title: 'Blog 2', author: 'Author 2', dateCreated: '2024-03-28', numLikes: 30, numComments: 5, previewContent: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        // Add more blogs as needed
    ];

    return (
        <div>
            {/* Header */}
            <Header />

            {/* Main Section */}
            <main>
                {/* Left Part */}
                <div className="left-section" style={{ width: '30%' }}>
                    <input type="text" placeholder="Search users" />
                    <div className="recommended-users">
                        <h2>Recommended Users</h2>
                        {/* Render recommended users */}
                        {recommendedUsers.map(user => (
                            <UserCard key={user.id} {...user} />
                        ))}
                    </div>
                </div>

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
            </main>
        </div>
    );
}

export default Home;
