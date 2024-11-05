import React from "react";
import avatar11 from "../assets/images/shampoo.png";
import avatar21 from "../assets/images/bar_soap.png";
const AboutBox = () => {
  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About Me</h1>
      </div>
      <div className="row">
        {/** About Me */}
        <div className="col">
          <div className="about-info">
            <h3>About Us</h3>
            <p>
              ฉันเชื่อว่าพวกเราได้สร้างและผลิตตัวของผลิตภัณท์พวกนี้มาได้อย่างเหมาสม และมีคุณภาพอีกทั้งเอง เราก็ยังเชื่อมั่นในการบริการลูกค้าและการคนส่งกับพวกเรา และเราเองก็อยากที่จะขอบคุณที่เลือกที่จะใช้ผลิตภัณท์ของพวกเราด้วยเช่นกัน..
            </p>
          </div>
        </div>
        <div className="featured-image">
        <div className="image">
          <img src={avatar11} alt="avatar11" />
        </div>
      </div>
      </div>
      <div className="row">
        {/** About Me */}
        <div className="featured-image">
        <div className="image">
          <img src={avatar21} alt="avatar21" />
        </div>
      </div>
        <div className="col">
          <div className="about-info">
            <h3>About Our Product</h3>
            <p>
              ผลิตภัณท์ที่เราทำขึ้นมานั้น ทำจากวัศดุรักธรรมชาติอีกทั้ง ยังปลอดสารพิษต่างๆ และยังเป็นมิตรกับสิ่งแวดล้อม ยกตัวอย่างเช่น แชมพูของพวกเราที่ใช้กลิ้นจากธรรมชาติ และเนื้อในอาจจะมีตัวของเนื้อผลไม้ด้วยเช่นกัน
            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default AboutBox;
