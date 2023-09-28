import React from "react";
import "./index.css";
import Image from "next/image";
import Img from "@/../public/images/laststem6.png";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="head">
        <h2>Testimonials</h2>
        <p>People love what we do, and we want to let you know</p>
      </div>
      <div className="testimonials-container">
        {/* Testimonial 1 */}
        <div className="testimonial">
          <h2>
            "Since Joining LAST STEM, My kid have experienced significant
            growth"
          </h2>
          <i className="stars">⭐️⭐️⭐️⭐️⭐️</i>
          <h3>Jack Sibire</h3>
          <p>Lead Manager, Growio</p>
        </div>
        {/* Testimonial 2 */}
        <div className="testimonial">
          <h2>"I recommend LAST STEM to any parent looking for improvement"</h2>
          <i className="stars">⭐️⭐️⭐️⭐️⭐️</i>
          <h3>Jack Sibire</h3>
          <p>Lead Manager, Growio</p>
        </div>
        {/* Testimonial 3 */}
        <div className="testimonial">
          <h2>
            "Since Joining LAST STEM, my kid have experienced significant
            growth"
          </h2>
          <i className="stars">⭐️⭐️⭐️⭐️⭐️</i>
          <h3>Jack Sibire</h3>
          <p>Lead Manager, Growio</p>
        </div>
      </div>
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
    </div>
  );
};

export default Testimonials;
