import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 1 });

  return (
    <section ref={ref} className={styles.whyHireMe}>
     {isInView && ( <>  <h2 className={styles.title}>🤝 Why Hire Me?</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={styles.skillCard}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.4 }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.span animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 1 }} className={styles.icon}>{skill.icon}</motion.span>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </motion.div>
        ))}
      </div>
      </>)}
    </section>
  );
};

export default WhyHireMe;
