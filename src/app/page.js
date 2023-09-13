"use client"

import React, { useEffect, useState } from 'react';
// import heroImage from './your-hero-image.jpg'; 

const Home = () => {
  const [typingIndex, setTypingIndex] = useState(0);
  const words = ['CODING', 'ROBOTICS', 'DESIGN', 'STEM'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTypingIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change words every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="hero">
        <div className="heroText">
          <p>- Schedule FREE 1hr Trial</p>
          <h1>
            Your Kids{' '}
            <span className="typingText">
              {words[typingIndex]}
            </span>{' '}
            companion
          </h1>
          <p>
            Hire top coding professionals, pay only for sessions attended.
          </p>
          <div className="buttons">
            <button className="tryButton">Try for free</button>
            <button className="worksButton">See how it works</button>
          </div>
        </div>
        <div className="heroImageContainer">
          <img
            src="/images/Hero_image.png"
            alt="Hero"
            className="heroImage"
          />
        </div>
      </div>

         {/* Trusted section */}
        <section className="trustedSection">
        <h3>Trusted and supported by top tech companies
          <br/>and global parent communities</h3>
        <div className="companyLogos">
          {/* Logo 1 */}
          <div className="companyLogo">
            <img src="/images/amazon.png" alt="Company Logo 1" />
          </div>
          {/* Logo 2 */}
          <div className="companyLogo">
            <img src="/images/apple.png" alt="Company Logo 2" />
          </div>
          {/* Logo 3 */}
          <div className="companyLogo">
            <img src="/images/MIT.png" alt="Company Logo 3" />
          </div>
          {/* Logo 4 */}
          <div className="companyLogo">
            <img src="/images/intel.png" alt="Company Logo 4" />
          </div>
          {/* Logo 5 */}
          <div className="companyLogo">
            <img src="/images/microsoft.png" alt="Company Logo 5" />
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
