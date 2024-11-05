import React from "react";
import avatar from "../assets/images/random.png";

const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Thanawat Srisaeng</span>
        </div>
        <div className="featured-name">
        ยินดีตอนรับคุณลูกค้าเรามีทั้ง <span className="TypedText"></span>
        </div>
        <div className="featured-text-info">
          <p className="featured-description">  
            เว็บไซต์นี้เป็นเว็ปไซต์ที่จะใช้ในการสั่งสื่อสินค้าออนไลน์จากคุณ ธนวัฒน์ ศรีแสง โดยเว็บไซต์นี้จะทำการขายสินค้าเกี่ยวสินค้าทำความสะอาดร่างกายเช่น สบู่,แชมพู,ยาสีฝัน,ครีม,และอื่นๆอีกมากมาย ขอให้คุณลูกค้า  มีความสุข
          </p>
        </div>

        <div className="featured-text-btn">
        <button className="btn">
          <a href="#project" className="btn">
            <i className="uil uil-shopping-cart-alt"></i> Shop Now
          </a></button>
          <button className="btn">
          <a href="#about" className="btn">
            <i className="uil uil-angle-double-down"></i> Know More
          </a></button>
        </div>


        {/* ปุ่มโซเชียลมีเดีย */}
        <div className="social_icons">
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
      </div>

      <div className="featured-image">
        <div className="image">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </section>
  );
};


export default FeaturedBox;
