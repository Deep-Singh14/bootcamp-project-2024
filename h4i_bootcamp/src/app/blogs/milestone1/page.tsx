"use client"
import React, { useState } from 'react';
import Navbar from '@/components/navbar';

export default function Milestone1() {
  // Define the blog data as state so that we can update it when new comments are added
  const [blog, setBlog] = useState({
    title: 'Milestone 1',
    date: '10/19/2024',
    content: 'First milestone in H4I bootcamp',
    comments: [
      { time: new Date(), user: 'Charlie', comment: 'Congrats on the first milestone!' },
      { time: new Date(), user: 'Dana', comment: 'Keep up the good work!' },
    ],
  });

  const slug = 'milestone1'; // This can come from routing if needed

  return (
    <div>
      <Navbar />

      <main>
        <h1>{blog.title}</h1>
        <p>Date Posted: {blog.date}</p>
        <p>{blog.content}</p>
      </main>

      {/* Render comments */}
      <h2>Comments</h2>
      {blog.comments.map((comment, index) => (
        <div key={index}>
          <strong>{comment.user}</strong>: {comment.comment}
        </div>
      ))}

      {/* Comment Form */}
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

    // Create a new comment object
    const newComment = { time: new Date(), user, comment };

    // Update the blog's comments state with the new comment
    setBlog((prevBlog: { comments: any; }) => ({
      ...prevBlog,
      comments: [...prevBlog.comments, newComment],
    }));

    setSuccess('Comment added successfully!');
    setUser('');
    setComment('');
  };

  return (
    <div className="about-content hover-box">
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
