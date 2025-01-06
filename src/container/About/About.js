import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { client, urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./About.scss";
import { images } from "../../constants";

const abouts = [
  {
    title: "E-Commerce Business Owner",
    description:
      "E-Commerce Business Owner: Established a successful UK-based e-commerce business, showcasing skills in web development, UI/UX design, and entrepreneurship.",
    imgUrl: images.about01,
  },
  {
    title: "Certified Developer",
    description:
      "Certified Developer: Earned multiple certifications in front-end development, demonstrating expertise in React, JavaScript, and modern web technologies.",
    imgUrl: images.about02,
  },
  {
    title: "Computer Science Graduate",
    description:
      "Computer Science Graduate: Graduated from the Faculty of Computer Science and Information Systems, equipped with strong foundations in programming and problem-solving.",
    imgUrl: images.about03,
  },
  {
    title: "Front-End Expertise",
    description:
      "Front-End Expertise: Specialized in building responsive, accessible, and visually appealing websites using React, TypeScript, and CSS frameworks.",
    imgUrl: images.about04,
  },
];

const About = () => {
  // const [abouts, setAbouts] = useState([]);
  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then((data) => setAbouts(data));
  // }, []);

  return (
    <div className="flex-column">
      <h2 className="head-text">
        I Know that <span>Good Apps</span>
        <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
