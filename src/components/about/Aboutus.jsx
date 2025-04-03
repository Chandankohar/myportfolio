import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./About.module.css";
import react from '../../static/image/react.jpg'
import reactnative from '../../static/image/reactnative.webp'
import django from '../../static/image/django.jpg'
import sql from '../../static/image/sql.jpeg'
import git from '../../static/image/git.png'
import restapi from '../../static/image/restapi.jpg'
import attentiontodetail from '../../static/image/attentiontodetail.jpg'
import fastlearner from '../../static/image/fastlearner.jpg'
import problemsolving from '../../static/image/problemsolving.webp'
import teamwork from '../../static/image/teamwork.jpg'
import timemanagement from '../../static/image/timemanagement.jpg'
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Parul University",
    year: "2021 - 2025",
  },
  {
    degree: "High School +2",
    institution: "MahaKavi Devkota Secondary School",
    year: "2019 - 2021",
  },
];
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 1 });
    const skillsData = [
        {  img: react },
        {img: reactnative },
        {img:django },
        { img:sql},
        {img: git},
        {  img:restapi },
       
      ];
      
      const softSkills = [
        { img: problemsolving },
        {  img: attentiontodetail },
        { img: teamwork },
        { img: fastlearner },
        { img: timemanagement },
      ];

  return (
    <section ref={ref} id="about" className={styles.about}>
      {isInView && ( <> 
      <h2>About Me</h2>
      <p>I am a passionate developer with experience in React, Django, and more.</p>

      <div className={styles.educationSection}>
      <h2 className={styles.title}>🎓 Education</h2>
      <div className={styles.educationList}>
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className={styles.educationCard}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.8 }}
          >
            <FaGraduationCap className={styles.icon} />
            <div>
              <h3>{edu.degree}</h3>
              <p>{edu.institution}</p>
              <span>{edu.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
      <div className={styles.skillsSection}>
      <motion.h2
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      ><motion.span
      className={styles.icon}

                animate={{ scale: [0.8, 1, 0.8] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                🚀
              </motion.span>
        
         Technical Skills</motion.h2>
      <div className={styles.skillsGrid}>
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className={styles.skill}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.4 }}
            whileHover={{ scale: 1.1 }}
          >
            <img src={skill.img} alt={skill.name} />
            
          </motion.div>
        ))}
      </div>

      <motion.h2
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      >
        
        <motion.span
                className={styles.icon}
                animate={{ scale: [0.8, 1, 0.8] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                💡
              </motion.span>
              
               Soft Skills</motion.h2>
      <div className={styles.skillsGrid}>
        {softSkills.map((skill, index) => (
          <motion.div
            key={index}
            className={styles.skill}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: index * 0.6 }}
            whileHover={{ scale: 1.1 }}
          >
            <img src={skill.img} alt={skill.name} />
            
          </motion.div>
        ))}
      </div>
    </div>
    </>)}
    </section>
  );
};

export default About;
