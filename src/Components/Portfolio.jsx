/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/defile-8495836_1280.webp";

const imageAltText = "scenery of a desk with a laptop, coffee, and plant.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Microsoft Learn Student Ambassador",
    description:
      "I lead a club at my university that focuses on cloud computing and AI. I am also a Microsoft Learn Student Ambassador, where I help students learn about cloud computing and AI.",
    url: "https://www.linkedin.com/in/mhbangie/?originalSubdomain=za",
  },
  {
    title: "AWS Captain",
    description:
      "As the Cloud Club Founder and Student Leader, I am the driving force behind the first-ever Cloud Club in Southern Africa and the Founder of the Wits Amazon Cloud Club",
    url: "https://www.linkedin.com/in/mhbangie/?originalSubdomain=za",
  },
  {
    title: "Intel Student Ambassador",
    description:
      "My project is at the forefront of agricultural innovation, harnessing the power of Intel oneAPI, Data Parallel C++ (DPC++), and Intel's Deep Neural Network Library (oneDNN). We are pioneering a revolutionary approach to hydroponic crop growth optimization using artificial intelligence. Our mission is to enable hydroponic systems to autonomously adapt and make informed decisions, eliminating the need for extensive labeled training data. We leverage the oneAPI toolkit to exploit the full potential of CPUs, GPUs, and FPGAs. By harnessing these diverse capabilities, we empower our system to learn, adapt, and optimize in real-time. Our project seeks to maximize crop yield and resource utilization, ultimately transforming the landscape of hydroponic agriculture.",
    url: "https://www.linkedin.com/in/mhbangie/?originalSubdomain=za",
  },
  {
    title: "Web developer",
    description:
      "I am responsible for the engineering, collaboration, and maintenance of a highly responsive DevOps website designed with Vue.js and Bootstrap. This website serves as a centralized platform for students to access, update, and stay informed about society news, events, and activities.",
    url: "https://www.linkedin.com/in/mhbangie/?originalSubdomain=za",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
