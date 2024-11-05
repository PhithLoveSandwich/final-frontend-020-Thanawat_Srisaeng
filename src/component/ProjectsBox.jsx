import React from "react";
import avatar from "../assets/images/bar_soap.png";
import avatar2 from "../assets/images/liquid_soap.png";
import avatar3 from "../assets/images/hand_wash.png";
import avatar4 from "../assets/images/cleansing.png";
const ProjectsBox = () =>(
    <section className="section" id="project">
        <div className="top-header">
            <h1>Popular</h1>
        </div>
        <div className="projects-container">
            <div className="project-box">
            <div className="featureds-image">
            <div className="images">
            <img src={avatar} alt="avatar" />
            </div>
            </div>
            <i className="uil uil-suitcase-alt"></i>
            <h3>completed</h3>
            <label>0 Finished Projects</label>
            </div>
            <div className="project-box">
            <i className="uil uil-constructor"></i>
            <h3>Clients</h3>
            <label>2 Happy Clients</label>
            </div>
            <div className="project-box">
            <i className="uil uil-folder-network"></i>
            <h3>Experience</h3>
            <label>1 Years in the field</label>
            </div>
            <div className="project-box">
            <i className="uil uil-folder-network"></i>
            <h3>Experience</h3>
            <label>1 Years in the field</label>
            </div>
        </div>
    </section>
);

export default ProjectsBox;
