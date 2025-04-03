import React from "react";
import { motion } from "framer-motion";
import styles from "./Project.module.css";
import projects from '../../static/js/projects.js'
import projecticon from '../../static/logo/project.png'

// Function to truncate descriptions
const truncateText = (text, limit) => {
  return text.length > limit ? text.substring(0, limit) + "..." : text;
};

const Project = () => {
  return (
    <section id="project" className={styles.projectsSection}>
      <motion.h2
      initial={{ opacity: 0, y: -30 }} 
      animate={{ opacity: 1, y: 0  }}
      transition={{  duration: 1 }}>
         <span><motion.img animate={{ scale: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 1 }} height={40} width={40} src={projecticon} alt="" /> Projects</span></motion.h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={styles.projectCard}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.img initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
           src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{truncateText(project.description, 100)}</p>
            {/* See More Button */}
      <motion.a
        href="/projects"  // Change this to your actual projects page URL
        className={styles.seeMoreBtn}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        See More

        <motion.span
          className={styles.arrow}
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          ➡️
        </motion.span>
      </motion.a>
          </motion.div>
        ))}
      </div>

      
    </section>
  );
};

export default Project;
