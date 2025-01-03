import React from 'react';
import Navbar from '@/components/navbar';
import Comment from '@/components/Comment';

export default function Milestone1() {
  return (
    <div>
      <Navbar />

      <main>
        <h1>Downtown</h1>
        <p>Date Posted: 10/16/2024</p>
        <p>Went downtown to eat some Thai food</p>
    </main>
    <div className="about-content hover-box">
      <Comment
        comment={{
          user: "Test User",
          comment: "Test Comment",
          time: new Date("2024-12-20"),
        }}
      ></Comment>
      </div>  
    </div>
  );
}
