'use client';

import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* <Navbar /> */}
        <section id="header-section">
            <h1>
              we are <span id="header-spark-text">spark</span>
            </h1>
        </section>

          <div className="home-btns-container">
            <Link href="/about">
              <button>Learn More &rarr;</button>
            </Link>
          </div>
      {/* <Footer /> */}
    </>
  );
}
