import React from "react";
import "./index.css";
import Image from "next/image";
import Img1 from "./../../../public/images/laststem5.png";

const Steps = () => {
  return (
    <div className="steps">
      <div className="box">
        <div className="left">
          <Image src={Img1} className="img" alt={Img1} />
          <h2>How to start learning</h2>
          <p>Just 3 simple steps to start your kids tech journey.</p>
          <button>Sign up now</button>
        </div>
        <div className="right">
          <div className="step">
            <h2>Step 1</h2>
            <p>
              Select your preffered instructor from a pool of professional and
              dedicated STEM experts.
            </p>
          </div>
          <div className="line"></div>
          <div className="step">
            <h2>Step 2</h2>
            <p>
              Schedule a trial session with any instructor at your convenient
              day and time.
            </p>
          </div>
          <div className="line"></div>
          <div className="step">
            <h2>Step 3</h2>
            <p>
              Impressed! Go on to schedule your preffered lesson with your
              preffered instructor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
