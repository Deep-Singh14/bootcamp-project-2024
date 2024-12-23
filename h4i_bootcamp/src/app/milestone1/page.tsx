import React from 'react';
import Navbar from '@/components/navbar';

export default function Milestone1() {
  return (
    <div>
      <Navbar />

      <h1 className="contact">Milestone 1</h1>
      <div className="contact-container">
        <div className="about-image">
          <p>Phone: 209-666-7789</p> 
          <p>Email: ksingh63@calpoly.edu</p>  
        </div>
      </div>
      <form id="contact-form" className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows={5} required />

        <input type="submit" value="Submit" className="button" />
      </form>

      <footer className="footer">© 2023 Deep's Website | All Rights Reserved</footer>
    </div>
  );
}
