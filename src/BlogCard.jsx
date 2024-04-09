function BlogCard({ id, title, content, image_url, author }) {
    return (
        <div className="blog-card">
            <img src={image_url} alt="Blog Thumbnail" />
            <h3>{title}</h3>
            <p>Author: {author.username}</p>
            <p>{content}</p>
        </div>
    );
}

export default BlogCard;