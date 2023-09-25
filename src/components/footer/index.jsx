import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="box">
        <div>
          <h2>Last STEM</h2>
          <p>
            2020&copy; Last STEM
            <br />
            All rights reserved.
          </p>
        </div>
        <ul>
          <li>Home</li>
          <li>Pricing</li>
          <li>About us</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Linkedin</li>
        </ul>
        <ul>
          <li>Privacy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
