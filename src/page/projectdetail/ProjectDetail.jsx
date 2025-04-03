import React from "react";
import { useParams } from "react-router-dom";
import projects from "../../static/js/projects";
import styles from "./ProjectDetail.module.css";
import { motion } from "framer-motion";
import Slider from "react-slick";
import  "slick-carousel/slick/slick.css";
import  "slick-carousel/slick/slick-theme.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);

  const sliderSettings = {
    dots: true,           // Show navigation dots
    infinite: true,       // Loop slides infinitely
    speed: 500,          // Transition speed
    slidesToShow: 1,      // Show only one image at a time
    slidesToScroll: 1,    // Scroll one slide at a time
    autoplay: true,       // Enable autoplay
    autoplaySpeed: 3000,  // Slide change every 3 seconds
    arrows: true,    };

  if (!project) {
    return <h2 style={{ textAlign: "center" }}>Project Not Found</h2>;
  }

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={project.image} alt={project.title} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{project.title}</h2>
        <h2 className={styles.title1}>{project.technology}</h2>
        <h2 className={styles.title1}>{project.date}</h2>
        <p><strong>Objective:</strong> {project.objective}</p>
        <p><strong>Description:</strong> {project.description}</p>

{/* Screenshot Slider */}
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {project.screenshots.map((screenshot, index) => (
            <div key={index} className={styles.slide}>
              <img src={screenshot} alt={`Screenshot ${index + 1}`} className={styles.sliderImage} />
            </div>
          ))}
        </Slider>
      </div>

        <div className={styles.links}>
          {project.reportLink && (
            <a href={project.reportLink} target="_blank" rel="noopener noreferrer">
              📄 Project Report
            </a>
          )}
          {project.hostedLink && (
            <a href={project.hostedLink} target="_blank" rel="noopener noreferrer">
              🌍 Live Demo
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              🔗 GitHub Repository 
            </a>
          )}

          {project.githubFrontendLink && (
            <a href={project.githubFrontendLink} target="_blank" rel="noopener noreferrer">
              🔗 GitHub Repository Frontend
            </a>
          )}

          {project.githubBackendLink && (
            <a href={project.githubBackendLink} target="_blank" rel="noopener noreferrer">
              🔗 GitHub Repository Backend
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
