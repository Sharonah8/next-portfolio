import React from "react";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Sharon's Portfolio</p>
        <div className="social_icons">
          <a
            href="https://twitter.com/Sharonah_Ken"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
