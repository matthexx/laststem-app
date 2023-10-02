import React from "react";
import "./page.css";
import Image from "next/image";
import Img from "@/../public/images/laststem6.png";
import Tick from "@/../public/images/tick.png";
import FAQ from "@/../public/images/FAQ-r.png";
import { BiChevronDown } from "react-icons/bi";
import Footer from "@/components/footer";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="pricing-hero">
        <h2>Pricing</h2>
        <p>
          Our pricing is not expensive, but it's not cheap either, it's exactly
          what it should be
        </p>
        <div className="prices">
          <div className="price">
            <h3>Basic</h3>
            <h2>
              <sup>$</sup>9<sub>/month</sub>
            </h2>
            <p>For parents with one child</p>
            <button>Get Started with Basic</button>
          </div>
          <div className="price">
            <div className="top">
              <button className="popular">Most Popular</button>
            </div>
            <h3>Pro</h3>
            <h2>
              <sup>$</sup>19<sub>/month</sub>
            </h2>
            <p>For parents or guardians with 2 - 5 kids</p>
            <button>Get Started with Pro</button>
          </div>
          <div className="price">
            <h3>Business</h3>
            <h2>
              <sup>$</sup>99<sub>/month</sub>
            </h2>
            <p>
              For more than 5 kids, schools or impact managers with large
              classes
            </p>
            <button>Get Started with Business</button>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="features-container">
          <h2 className="title">Compared Features</h2>
          <div className="head">
            <h2>Basic</h2>
            <h2>Pro</h2>
            <h2>Business</h2>
          </div>
          <div className="body">
            {/* Basic */}
            <div className="basic">
              <div className="li">
                <Image src={Tick} className="tick" />
                <p>Learning Analysis</p>
              </div>
              <div className="li">
                <Image src={Tick} className="tick" />
                <p>Student Management</p>
              </div>
              <div className="li">
                <Image src={Tick} className="tick" />
                <p>Time Tracking</p>
              </div>
              <div className="li">
                <Image src={Tick} className="tick" />
                <p>Performance Metrics</p>
              </div>
              <div className="li">
                <Image src={Tick} className="tick" />
                <p>Performance Reports</p>
              </div>
              <div className="li">
                <Image src={Tick} className="tick" />
                <p>Group Lessons</p>
              </div>
            </div>
            {/* Pro */}
            <div className="pro">
              <div className="li">
                <Image src={Tick} className="tick" />
                <p>Learning Analysis</p>
              </div>
              <div className="li">
                <Image src={Tick} className="tick" />
                <p>Student Management</p>
              </div>
              <div className="li">
                <Image src={Tick} className="tick" />
                <p>Time Tracking</p>
              </div>
              <div className="li">
                <Image src={Tick} className="tick" />
                <p>Performance Metrics</p>
              </div>
              <div className="li">
                <Image src={Tick} className="tick" />
                <p>Performance Reports</p>
              </div>
              <div className="li">
                <Image src={Tick} className="tick" />
                <p>Group Lessons</p>
              </div>
              <div className="li">
                <Image src={Tick} className="tick" />
                <p>Multiple Students Schedule</p>
              </div>
              <div className="li">
                <Image src={Tick} className="tick" />
                <p>One-On-One Schedule</p>
              </div>
            </div>
            {/* Business */}
            <div className="business">
              <div className="li">
                <Image src={Tick} className="tick" />
                <p>Learning Analysis</p>
              </div>
              <div className="li">
                <Image src={Tick} className="tick" />
                <p>Student Management</p>
              </div>
              <div className="li">
                <Image src={Tick} className="tick" />
                <p>Time Tracking</p>
              </div>
              <div className="li">
                <Image src={Tick} className="tick" />
                <p>Performance Metrics</p>
              </div>
              <div className="li">
                <Image src={Tick} className="tick" />
                <p>Performance Reports</p>
              </div>
              <div className="li">
                <Image src={Tick} className="tick" />
                <p>Group Lessons</p>
              </div>
              <div className="li">
                <Image src={Tick} className="tick" />
                <p>Multiple Students Schedule</p>
              </div>
              <div className="li">
                <Image src={Tick} className="tick" />
                <p>One-On-One Schedule</p>
              </div>
              <div className="li">
                <Image src={Tick} className="tick" />
                <p>Analytics Dashboard</p>
              </div>
              <div className="li">
                <Image src={Tick} className="tick" />
                <p>Monthly Mentorship Session</p>
              </div>
            </div>
          </div>
        </div>
        {/* FAQ */}
        <div className="faqs">
          <Image src={FAQ} className="faqs-img" alt="FAQs" />
          <h2>Frequently asked questions</h2>
          <div className="faq">
            <div className="question">
              <p>How does this work?</p>
              <BiChevronDown className="down" />
            </div>
            <div className="question">
              <p>What are the benefits?</p>
              <BiChevronDown className="down" />
            </div>
            <div className="question">
              <p>Is it difficult to use?</p>
              <BiChevronDown className="down" />
            </div>
            <div className="question">
              <p>Can I have custom pricing?</p>
              <BiChevronDown className="down" />
            </div>
            <div className="question">
              <p>Is there trial version available?</p>
              <BiChevronDown className="down" />
            </div>
            <div className="question">
              <p>Where do I sign up?</p>
              <BiChevronDown className="down" />
            </div>
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
      <Footer />
    </div>
  );
};

export default Pricing;
