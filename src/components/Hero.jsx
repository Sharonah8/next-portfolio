import React from "react";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image
        src="/images/profile.jpg"
        className="profile-img"
        width={300}
        height={300}
        alt="Sharon's profile image"
      />
      <div className="hero-text">
        <h1>Hey, I'm Sharon 👋</h1>
        <p>
          Passionate software engineer with a strong foundation in developing
          applications. Experienced in full stack development, collaborating
          with cross-functional teams, and solving technical challenges.
          Committed to continous learning and staying up-to-date with the latest
          industry trends.
        </p>
        <div className="social_icons">
          <a
            href="https://twitter.com/Sharonah_Ken"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/Sharonah8"
            aria-label="Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/sharon-nyamongo/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
