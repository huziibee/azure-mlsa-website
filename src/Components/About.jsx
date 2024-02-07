/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/rock-8196075_640.webp";

const imageAltText = "scenery of rocks and water with clear blue sky";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a passionate student from South Africa currently enrolled in the Microsoft Learn Student Ambassadorship program at the University of the Witwatersrand. My career goals revolve around leveraging technology to create positive change in my community.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "User experience",
  "Inclusive design",
  "Focus group testing",
  "Mobile user interfaces",
  "Graphic design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "As a student ambassador, I am committed to empowering others with the knowledge and skills needed to excel in the digital world. I believe in the transformative power of technology to address societal challenges and enhance people's lives. Whether it's through organizing workshops, mentoring, or advocating for inclusive tech education, I am dedicated to making a difference. \nInspired by the words of Nelson Mandela, \"Education is the most powerful weapon which you can use to change the world,\" I strive to be an advocate for accessible and equitable education, particularly in STEM fields. I am excited about the opportunities that lie ahead and eager to contribute to a brighter future through technology and education. ";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
