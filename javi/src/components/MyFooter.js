import React from "react";

const MyFooter = () => {
  return (
    <>
      <div className="main-footer">
        <div className="our-services">
          <ul>
            <h4>Our Offerings</h4>
            <li>Fitness Guidance</li>
            <li>Fitness Tracking</li>
            <li>Fitness Counselling</li>
          </ul>
        </div>
        <div className="social-media">
          <ul>
            <h4>Social Media</h4>
            <li>
              <i class="fab fa-linkedin fa-fw"></i>
              <a href="www.google.com"> Avanish's Linkedin</a>
            </li>
            <li>
              <i class="fab fa-linkedin fa-fw"></i>
              <a href="www.google.com"> Jayshil's Linkedin</a>
            </li>
            <li>
              <i class="fab fa-instagram fa-fw"></i>
              <a href="www.google.com"> Fithub Instagram</a>
            </li>
          </ul>
        </div>
        <div className="our-partners">
          <ul>
            <h4>Our Partners</h4>
            <li>Fitness Guidance</li>
            <li>Fitness Tracking</li>
            <li>Fitness Counselling</li>
          </ul>
        </div>
      </div>
      <div className="strip">
        Made with <i class="fas fa-heart"></i> & <i class="fas fa-mug-hot"></i>{" "}
        by Jayshil and Avanish.
      </div>
    </>
  );
};

export default MyFooter;
