import React from "react";
import Header from "./component/Header";
import FeaturedBox from "./component/FeaturedBox";
import Section from "./component/Section";
import AboutBox from "./component/AboutBox";
import ProjectsBox from "./component/ProjectsBox";
import ContactBox from "./component/ContactBox";
import Footer from "./component/Footer";
import "./App.css";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    /**scroollreveal */
    const sections = document.querySelectorAll("section[id]");
    const scrollActive = () => {
      const scrollY = window.scrollY;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
        } else {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");
        }
      });
    };
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    //home
    sr.reveal(".featured-text-card", { delay: 0 });
    sr.reveal(".featured-name", { delay: 100 });
    sr.reveal(".featured-text-info", { delay: 200 });
    sr.reveal(".featured-text-btn", { delay: 200 });
    sr.reveal(".social_icons", { delay: 200, interval: 100 });
    sr.reveal(".featured-image", { delay: 200 });
    sr.reveal(".project-box", { delay: 200 });

    sr.reveal(".top-header", { delay: 200 });
  

    const srRignt = ScrollReveal({
      origin: "right",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    
    srRignt.reveal(".skills-box", { delay: 200 });
    srRignt.reveal(".form-control", { delay: 200 });



    const srLeft = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    srLeft.reveal(".about-info", { delay: 200 });

    srLeft.reveal(".contact-info", { delay: 200 });
    
    

    window.addEventListener("scroll", scrollActive);
    /**ใช้เอคเฟค */
    const typingEffect = new Typed(".TypedText", {
      strings: ["สบู่", "แชมพู", "ยาสีฝัน"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    });
    return () => {
      typingEffect.destroy();
    };
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <main className="wrapper">
          <FeaturedBox />
          <Section />
          <AboutBox />
          <ProjectsBox />
          <ContactBox />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
