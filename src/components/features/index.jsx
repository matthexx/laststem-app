import React from "react";
import "./index.css";
import Img1 from "./../../../public/images/laststem1.png";
import Img2 from "./../../../public/images/laststem2.png";
import Image from "next/image";

const Features = () => {
  return (
    <div className="features">
      <div className="one-for-all">
        <div className="left">
          <Image src={Img2} alt="Image 1" />
        </div>
        <div className="right">
          <h3>ONE FOR ALL</h3>
          <h2>Track and Monitor all your kids lessons from one app</h2>
          <p>
            Schedule and monitor your kids learning experience, all from one
            dashboard. Monitor multiple kids lesson performance and how they
            grow, within their tech journey.
          </p>
          <button>Try now</button>
        </div>
      </div>
      <div className="cost-saver">
        <div className="left">
          <Image src={Img1} alt="Image 1" />
        </div>
        <div className="right">
          <h3>COSTSAVER</h3>
          <h2>Save money with each lesson</h2>
          <p>
            Only pay for the lessons attended, save yourself the hassel, and
            cost of paying for lessons not attended. Check out competitive
            instructors from each instructor's review and rating to guarantee
            your child's excellence.
          </p>
          <button>Try now</button>
        </div>
      </div>
    </div>
  );
};

export default Features;
