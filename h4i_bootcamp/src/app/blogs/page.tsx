import Blog from "@/database/blogSchema";
import connectDB from "@/database/db";

// Fetch blogs from MongoDB
async function getBlogs() {
  await connectDB(); // Ensure the database connection

  try {
    // Query for all blogs and sort by date
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    return blogs;
  } catch (err) {
    return null;
  }
}

// Server-side rendering the blog list
export default async function BlogListPage() {
  const blogs = await getBlogs();

  // Check if blogs are returned
  if (!blogs) {
    return <div>No blogs found or an error occurred.</div>;
  }

  return (
    <div id="blog-container">
      {blogs.map((blog: any) => (
        <div key={blog.slug}>
          <h1>{blog.title}</h1>
          <img
            src={blog.image || "/placeholder.jpg"}
            alt={blog.imageAlt || "Blog image"}
          />
          <p>{blog.description}</p>
          <a href={`/blogs/${blog.slug}`}>MORE</a>
        </div>
      ))}
    </div>
  );
}
