import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';

export default function Resume() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <h1>Milestone 1</h1>
        <p>Date Posted: 10/19/2024</p>
        <p>First milestone in H4I bootcamp</p>
      </main>
      <footer className="footer">© 2023 Deep's Website | All Rights Reserved</footer>
    </div>
  );
}
