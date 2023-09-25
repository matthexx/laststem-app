import React from "react";
import "./page.css";
import Footer from "@/components/footer";
import Image from "next/image";
import Img from "@/../public/images/laststem4r.png";

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="left">
          <Image className="img" src={Img} alt="Image" />
        </div>
        <div className="form-container">
          <h2>Contact Us</h2>
          <p>Explore the future with us. Feel free to get in touch.</p>
          <form>
            <div className="input">
              <label>Name</label>
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="input">
              <label>Email</label>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input">
              <label>Message</label>
              <input type="text" placeholder="How can we get better?" />
            </div>
            <button>Send message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
