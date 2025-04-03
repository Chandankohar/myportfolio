import React from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.title}>📬 Contact Me</h2>
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
      </div>
    </section>
  );
};

export default Contact;
