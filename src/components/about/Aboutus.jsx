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
import mongodb from '../../static/image/mongodb.jpg'
import express from '../../static/image/express.jpg'
import tailwind from '../../static/image/tailwind.webp'



const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 1 });
    const skillsData = [
        {  img: react },
        {  img: mongodb },
        {  img: express },
        {img: reactnative },
        {img: tailwind },
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
      <h2>Skills</h2>
      <p>I am a passionate developer with experience in React, Django, and more.</p>

     
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
