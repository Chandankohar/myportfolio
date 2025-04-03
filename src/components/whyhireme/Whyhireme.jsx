import React from "react";
import { motion } from "framer-motion";
import styles from "./WhyHireMe.module.css";
import { FaCode, FaBrain, FaServer, FaUsers } from "react-icons/fa";

const skills = [
  { icon: <FaCode />, title: "Full-Stack Expertise", description: "Strong knowledge of both frontend & backend development." },
  { icon: <FaBrain />, title: "Problem Solver", description: "Able to tackle complex technical challenges efficiently." },
 {
  icon: <FaServer />, 
  title: "Passion for Building REST APIs", 
  description: "I enjoy designing scalable and efficient RESTful APIs, ensuring smooth communication between frontend and backend systems."
},
{ icon: <FaUsers />, title: "Quick Learner & Team Player", description: "Adaptable to new technologies and collaborates well in teams." }
];

const WhyHireMe = () => {
  return (
    <section className={styles.whyHireMe}>
      <h2 className={styles.title}>🤝 Why Hire Me?</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={styles.skillCard}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.span animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 1 }} className={styles.icon}>{skill.icon}</motion.span>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyHireMe;
