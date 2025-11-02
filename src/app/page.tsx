'use client';

import React from 'react';
import Link from 'next/link';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import RecruitingBanner from './components/recruiting-banner/recruiting-banner';
// import ShowcaseBanner from './components/recruiting-banner/showcase-banner';
// import Overview from './components/sections/overview';
// import CenterContainer from './components/center-container';
// import Spacer from './components/Spacer';

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
