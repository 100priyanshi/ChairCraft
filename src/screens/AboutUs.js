import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Chaircraft by Maruti-Lining Works</h1>
        <p>
          Welcome to Chaircraft by Maruti-Lining Works, your go-to destination
          for high-quality, durable, and aesthetically pleasing chairs. For over
          a decade, we have specialized in crafting the best seating solutions
          that combine ergonomics, style, and functionality. Our extensive range
          of chairs is designed to meet the needs of both office and home
          environments.
        </p>
        <p>
          From classic wooden chairs to state-of-the-art revolving chairs, our
          collection is made with utmost precision, ensuring comfort and
          long-lasting performance. At Chaircraft, customer satisfaction is our
          top priority, and we strive to provide innovative and customized
          solutions for all your seating needs.
        </p>

        <h2>Revolving Chairs</h2>
        <p>
          Revolving chairs are a perfect blend of flexibility, comfort, and
          modern design. Ideal for offices and workspaces, these chairs allow
          for easy mobility, reducing the need to stand frequently. The
          adjustable height and ergonomic design help maintain good posture,
          preventing back pain and discomfort during long working hours. Our
          revolving chairs come in various designs, materials, and colors to
          suit any professional setting.
        </p>

        <h3>Why Choose Our Revolving Chairs?</h3>
        <ul>
          <li>360-degree rotation for easy movement</li>
          <li>Adjustable height for personalized comfort</li>
          <li>Durable materials ensuring long-lasting use</li>
          <li>Ergonomic design to reduce strain on your back and neck</li>
        </ul>

        <p>
          Explore our collection of revolving chairs and enhance your workspace
          with comfort and style!
        </p>

        {/* Bold contact information and clickable email link */}
        <p>
          <strong>Contact Us: 9173108639</strong>
        </p>
        <p>
          <strong>Email Us: </strong>
          <a href="mailto:marutiliningworks22@gmail.com">
            marutiliningworks22@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
