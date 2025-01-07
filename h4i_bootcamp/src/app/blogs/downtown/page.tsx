"use client"
import React, { useState } from 'react';
import Navbar from '@/components/navbar';

export default function Downtown() {
  // Define the blog data
  const [blog, setBlog] = useState({
    title: 'Downtown',
    date: '10/16/2024',
    content: 'Went downtown to eat some Thai food',
    comments: [
      { time: new Date(), user: 'Alice', comment: 'Looks amazing!' },
      { time: new Date(), user: 'Bob', comment: 'I love Thai food!' },
    ],
  });

  const slug = 'downtown';

  return (
    <div>
      <Navbar />

      <main>
        <h1>{blog.title}</h1>
        <p>Date Posted: {blog.date}</p>
        <p>{blog.content}</p>
      </main>

      <h2>Comments</h2>
      {blog.comments.map((comment, index) => (
        <div key={index}>
          <strong>{comment.user}</strong>: {comment.comment}
        </div>
      ))}

      <CommentForm slug={slug} setBlog={setBlog} blog={blog} />
    </div>
  );
}

// CommentForm Component
function CommentForm({
  slug,
  setBlog,
  blog,
}: {
  slug: string;
  setBlog: React.Dispatch<React.SetStateAction<any>>;
  blog: { title: string; date: string; content: string; comments: any[] };
}) {
  const [user, setUser] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!user || !comment) {
      setError('Please fill in both fields.');
      return;
    }

    setError(''); // Clear error

    // Update the blog comments with the new comment
    const newComment = { time: new Date(), user, comment };
    setBlog((prevBlog: { comments: any; }) => ({
      ...prevBlog,
      comments: [...prevBlog.comments, newComment],
    }));

    setSuccess('Comment added successfully!');
    setUser('');
    setComment('');
  };

  return (
    <div>
      <h3>Leave a Comment</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user">Name</label>
          <input
            type="text"
            id="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
}
