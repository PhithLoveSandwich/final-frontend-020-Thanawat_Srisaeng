import React from "react";
const Footer = () => (
  <footer>
    <div className="top-footer">
      <p>Thanawat Srisaeng .</p>
    </div>
    <div className="middle-footer">
      <ul className="footer-menu">
        <li className="footer_menu_list">
          <a href="#home">Home</a>
        </li>
        <li className="footer_menu_list">
          <a href="#about">About</a>
        </li>
        <li className="footer_menu_list">
          <a href="#project">Project</a>
        </li>
        <li className="footer_menu_list">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
    <div className="footer-social-icons">
      <div className="icon">
        <a
          href="https://www.facebook.com/thanawad.srisaeng.35/?locale=th_TH"
          className="icon social-icon"
        >
          <i className="uil uil-facebook"></i>
        </a>
      </div>
      <div className="icon">
        <a href="#" className="icon social-icon">
          <i className="uil uil-twitter"></i>
        </a>
      </div>
      <div className="icon">
        <a href="#" className="icon social-icon">
          <i className="uil uil-linkedin"></i>
        </a>
      </div>
    </div>
    <div className="bottom-footer">
      <p>Copyright &copy;Thanawat - All right reserved</p>
    </div>
  </footer>
);

export default Footer;
