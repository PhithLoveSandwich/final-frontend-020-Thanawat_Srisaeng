import React from "react";
const Footer = () => (
  <footer>
    <div className="newsletter-section">
      <h3>Subscribe to our newsletter</h3>
      <div className="newsletter-form">
        <input type="email" placeholder="Your Email Address" />
        <button>Subscribe</button>
      </div>
    </div>

    <div className="footer-content">
      <div className="footer-column">
        <p>Thanawat Shampoo Shop</p>
      </div>

      <div className="footer-column">
        <h4>Quick Link</h4>
        <ul>
          <li><a href="#plants">Soap</a></li>
          <li><a href="#flowers">Shampoo</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Popular Services</h4>
        <ul>
          <li>ติดต่อประชาสัมพันธ์</li>
          <li>สั่งซื้อ</li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Contact Us</h4>
        <p>+88 855564258</p>
        <p>664259020@gmail.com</p>
        <p>1142 Thailand Ave, CBS City</p>
      </div>
    </div>

    <div className="footer-social">
      <a href="https://facebook.com"><i className="uil uil-facebook"></i></a>
      <a href="https://twitter.com"><i className="uil uil-twitter"></i></a>
      <a href="https://linkedin.com"><i className="uil uil-linkedin"></i></a>
    </div>

    <div className="footer-bottom">
      <p>Copyright &copy; Thanawat - All rights reserved</p>
    </div>
  </footer>
);

export default Footer;
