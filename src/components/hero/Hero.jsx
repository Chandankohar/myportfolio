import React from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import myImage from '../../static/image/my_image.jpg'
const Hero = () => {
  return (
    <section className={styles.hero}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span>CHANDAN KOHAR</span>
      </motion.h1>

      <div className={styles.heroContent}>
     <div>
     <motion.p
     initial={{ opacity: 0, scale: 0.5, rotate: -10 }}  // Start small and rotated
     animate={{ opacity: 1, scale: 1, rotate: 0 }}  // Zoom to normal with rotation
     transition={{ duration: 1.5, ease: "easeOut" }}
     className={styles.tagline}
      >
      💡 I turn ideas into reality—from building interactive frontends to architecting robust backend systems.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className={styles.herodesc}
      >

        
        A Full-Stack Developer passionate about building scalable web applications and creating seamless user experiences. 
        With expertise in React.js, React Native, Django, and SQL databases, I specialize in crafting high-performance,
         intuitive, and visually appealing applications.
         <br />
         
      
      </motion.div>

      <motion.a
        href="/projects"  // Change this to your actual projects page URL
        className={styles.seeMoreBtn}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        See Resume

        <motion.span
          className={styles.arrow}
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          ➡️
        </motion.span>
      </motion.a>

      
      </div>
      <motion.div
        initial={{ opacity: 0, x: -100}}
        animate={{ opacity: 1 ,x: 0}}
        transition={{ duration: 1.5 }}
        className={styles.myimagecontainer}
      >
        <img className={styles.myimage} src={myImage} alt="me" />

      </motion.div>

      </div>
     
      
    </section>
  );
};

export default Hero;
