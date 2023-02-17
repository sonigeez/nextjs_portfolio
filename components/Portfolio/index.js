import React from "react";
import Project from "./project";
import Projects from "./data";
import { motion } from "framer-motion";
import Chat from "../../public/chat.svg";
import Link from 'next/link'
import styles from '../../styles/Portfolio.module.scss'
import Image from "next/image";




export default function Portfolio() {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <section className={styles.Portfolio}>
      <h1>Here are some of my personal Projects</h1>
      <Link className={styles.backButton} href="/chat/start/completed">
        <Image src={Chat} alt="Chat" /> Go back to chatting.
      </Link>
      <motion.div className={styles.grid} initial="hidden" animate="show">
        {Projects.map((project) => {
          return (
            <motion.div variants={item}>
              <Project data={project} />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
