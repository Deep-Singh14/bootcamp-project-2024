import Navbar from '@/components/navbar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Comment from '@/components/Comment'; 

interface Blog {
  title: string;
  slug: string;
  content: string;
  comments: {
    user: string;
    comment: string;
    time: Date;
  }[];
}

const Blog = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      fetch(`/api/blogs/${slug}`)
        .then((res) => res.json())
        .then((data) => {
          setBlog(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <div>
      <Navbar /> {/* Include the Navbar only for this page */}
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      {blog.comments && blog.comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
};

export default Blog;
