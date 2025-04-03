import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Contact.module.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} id="contact" className={styles.contactSection}>
    {isInView && ( <>  <h2 className={styles.title}>📬 Contact Me</h2>
      <div className={styles.contactList}>
        {/* Email */}
        <motion.a
          href="mailto:koharc2@gmail.com"
          className={styles.contactItem}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaEnvelope className={styles.icon} /> koharc2@gmail.com
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/chandan-kohar/"
          className={styles.contactItem}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaLinkedin className={styles.icon} /> linkedin.com/in/chandan-kohar
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/Chandankohar"
          className={styles.contactItem}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub className={styles.icon} /> github.com/Chandankohar
        </motion.a>

        <motion.a
  href="https://www.instagram.com/chandu1234908?igsh=MXRpa2lwbHQyZzR5aw=="
  className={styles.contactItem}
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
>
  <FaInstagram className={styles.icon} /> Instagram @Chandankohar
</motion.a>


      </div>
      </>)}
    </section>
  );
};

export default Contact;
