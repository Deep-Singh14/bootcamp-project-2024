import React from "react";
import Navbar from "@/components/navbar";
import Comment from "@/components/Comment";

export default function Milestone1() {
  return (
    <div>
      <Navbar />

      <main>
        <h1>Milestone 1</h1>
        <p>Date Posted: 10/19/2024</p>
        <p>First milestone in H4I bootcamp</p>
      </main>
      
      <div className="about-content hover-box">
      <Comment
        comment={{
          user: "Test User",
          comment: "Test Comment",
          time: new Date("2024-12-21"),
        }}
      ></Comment>
      </div>
    </div>
  );
}
