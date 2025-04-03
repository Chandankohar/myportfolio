import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Experience.module.css";
import { FaBriefcase } from "react-icons/fa";
import aarksoftcrm from '../../static/image/project/aarksoftcrm.png'
const experiences = [
  {
    company: "Aarksoft Web Tec",
    logo:aarksoftcrm,
    role: " Web Developer Intern",
    duration: "20 November 2024 - 20 March 2025",
    tech: "Django, SQL, CRM, ERP",
    description: [
      "Developing a web application integrating CRM & ERP functionalities.",
      "Using Django for backend development and SQL for database management.",
      "Collaborating with the team to improve workflow automation and business processes."
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 1 });
  return (
    <section ref={ref} className={styles.experienceSection}>
      {isInView && ( <> <h2 className={styles.title}>💼 Work Experience</h2>
      <div className={styles.experienceList}>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={styles.experienceCard}
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: index * 0.4 }}
          >
            <FaBriefcase className={styles.icon} />
            <div>
              <img src={exp.logo} alt={exp.company} />
              <h3>{exp.role} - <span>{exp.company}</span></h3>
              <p className={styles.duration}>{exp.duration}</p>
              <p className={styles.tech}><strong>Technologies:</strong> {exp.tech}</p>
              <ul>
                {exp.description.map((desc, i) => (
                  <li  key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
      </>)}
    </section>
  );
};

export default Experience;
