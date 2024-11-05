import React from "react";
import avatar from "../assets/images/jane.jpg";
import avatar2 from "../assets/images/doe.jpg";
import avatar3 from "../assets/images/louis.jpg";

const ContactBox = () => (
  <section className="section" id="contact">
    <div className="top-header" >
      <h3>Customer Review</h3>
      <span>คุณสามารถอ่านรีวิวจากลูกค้าที่เคยใช้บริการจากเราได้</span>
    </div>

      <div className="project-container">
            <div className="projects-box">
            <i className="uil uil-laughing"></i>
            <h3>Ms.Jane</h3>
            <label>บริการที่คุณให้กับพวกเราดีมากเลยคะ</label>
            <div className="projects-image">
            <img src={avatar} alt="jane" />
          </div>
            </div>
            <div className="projects-box">
            <i className="uil uil-laughing"></i>
            <h3>Ms.Doe</h3>
            <label>จัดของส่งเร็วมาถ้ามีโอกาสฉันจะมาใช้อีกนะ</label>
            <div className="projects-image">
            <img src={avatar2} alt="doe" />
          </div>
            </div>
            <div className="projects-box">
            <i className="uil uil-laughing"></i>
            <h3>Ms.Louis</h3>
            <label>สุดยอดไปเลย เอาไป 7/10</label>
            <div className="projects-image">
            <img src={avatar3} alt="louis" />
          </div>
            </div>
        </div>
  </section>
);

export default ContactBox;
