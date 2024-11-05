import React from "react";
import avatar from "../assets/images/bar_soap.png";
import avatar2 from "../assets/images/liquid_soap.png";
import avatar3 from "../assets/images/hand_wash.png";
import avatar4 from "../assets/images/cleansing.png";

const ProductsBox = () => (
  <section className="section" id="project">
    <div className="top-header">
      <h1>Popular Products</h1>
    </div>
    <div className="products-container">
      {/* Product 1 */}
      <div className="product-card">
        <div className="product-image">
          <img src={avatar} alt="Bar Soap" />
        </div>
        <h3>สบู่ก้อน</h3>
        <p>สบู่ก้อนธรรมดาที่มีหลานกลิ่นและหลายสูตร.</p>
        <p className="price">45 บาท</p>
        <div className="featured-text-btn">
          <button className="btns">
            <i className="uil uil-shopping-cart-alt"></i> สังซือสินค้าเลย
          </button>
        </div>
      </div>

      {/* Product 2 */}
      <div className="product-card">
        <div className="product-image">
          <img src={avatar2} alt="Liquid Soap" />
        </div>
        <h3>สบู่เหลว</h3>
        <p>สบู่เหลวที่มีหลายกลิ่นและและหลายสูตรเช่นกัน.</p>
        <p className="price">$45 บาท</p>
        <div className="featured-text-btn">
          <button className="btns">
            <i className="uil uil-shopping-cart-alt"></i> สังซือสินค้าเลย
          </button>
        </div>
      </div>

      {/* Product 3 */}
      <div className="product-card">
        <div className="product-image">
          <img src={avatar3} alt="Hand Wash" />
        </div>
        <h3>เจลล้างมือ</h3>
        <p>เจลล้างมือ จากแอลกอฮอล</p>
        <p className="price">35 บาท</p>
        <div className="featured-text-btn">
          <button className="btns">
            <i className="uil uil-shopping-cart-alt"></i> สังซือสินค้าเลย
          </button>
        </div>
      </div>

      {/* Product 4 */}
      <div className="product-card">
        <div className="product-image">
          <img src={avatar4} alt="Cleansing Foam" />
        </div>
        <h3>คลินซิ่ง</h3>
        <p>ทำความสะอาดหน้าและการล้างเครื่องสำอาง</p>
        <p className="price">65 บาท</p>
        <div className="featured-text-btn">
          <button className="btns">
            <i className="uil uil-shopping-cart-alt"></i> สังซือสินค้าเลย
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default ProductsBox;
