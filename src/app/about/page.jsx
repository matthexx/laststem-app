import React from "react";
import "./page.css";
import Image from "next/image";
import Img from "@/../public/images/laststem3.png";
import Img1 from "@/../public/images/laststem4r.png";
import Team1 from "@/../public/images/team1.png";
import Team2 from "@/../public/images/team2.jpeg";
import Team3 from "@/../public/images/team3.jpeg";
import Team4 from "@/../public/images/team4.jpg";
import Team5 from "@/../public/images/team5.jpg";
import Team6 from "@/../public/images/team6.jpg";
import Team7 from "@/../public/images/team7.jpg";
import Footer from "@/components/footer";

const About = () => {
  return (
    <div className="about">
      <div className="about-hero">
        <h2>About us</h2>
        <p>
          We offer creative live STEM lessons for global students. Join the Last
          STEM community and experience your child's tech career reach for the
          moon!
        </p>
        <Image src={Img} alt="Image" />
        <h2>Our Mission</h2>
        <p className="mission">
          At Last - STEM, we are commited to provide excellent learning
          experiences for every child and parent and to help them achieve the
          best outcomes. We believe that we can make a positive impact in every
          child, community and the world. Last STEM instructors are dedicated to
          providing the best possible training and support, and we are always
          looking for ways to improve and innovate.
        </p>
      </div>
      <div className="scale-up">
        <div className="items">
          <h2>Let's scale your kid's tech journey to amazing heights today!</h2>
          <Image src={Img1} />
        </div>
      </div>
      <div className="team">
        <div className="head">
          <h2>Team</h2>
          <p>Meet the people behind our magical product</p>
        </div>
        <div className="members">
          {/* 1 */}
          <div className="profile">
            <Image className="profile-img" src={Team1} alt="Team1" />
            <h2>Matthew O.</h2>
            <p>Founder</p>
          </div>
          {/* 2 */}
          <div className="profile">
            <Image className="profile-img" src={Team2} alt="Team1" />
            <h2>Daniel Peter</h2>
            <p>CTO</p>
          </div>
          {/* 3 */}
          <div className="profile">
            <Image className="profile-img" src={Team3} alt="Team1" />
            <h2>Lars Mikkel</h2>
            <p>Head of Operations</p>
          </div>
          {/* 4 */}
          <div className="profile">
            <Image className="profile-img" src={Team4} alt="Team1" />
            <h2>Dennis Former</h2>
            <p>Head of Product</p>
          </div>
          {/* 5 */}
          <div className="profile">
            <Image className="profile-img" src={Team5} alt="Team1" />
            <h2>Edward Finch</h2>
            <p>Head of Development</p>
          </div>
          {/* 6 */}
          <div className="profile">
            <Image className="profile-img" src={Team6} alt="Team1" />
            <h2>Matthew Low</h2>
            <p>Tech Support</p>
          </div>
          {/* 7 */}
          <div className="profile">
            <Image className="profile-img" src={Team7} alt="Team1" />
            <h2>Michaela Hans.</h2>
            <p>Community Manager</p>
          </div>
        </div>
      </div>
      <section>
        <div className="get-started">
          {/* <div className="box"> */}
          <div className="text">
            <h2>Get started with Last STEM today</h2>
            <p>Start your kid's tech journey today.</p>
            <button>Sign up now</button>
          </div>
          <Image src={Img} alt={"Logo"} />
          {/* </div> */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
