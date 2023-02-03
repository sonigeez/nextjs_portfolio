import React, { useEffect, useState } from "react";
import style from "../../styles/Chat.module.scss";
import data from "./data";
import Message from "./Message";
import Answer from "./Answer";
import Typing from "./Typing";
import Head from "../../public/head.jpg";
import Image from 'next/image'
import { motion } from "framer-motion";
import Loader from "../loader";
// import { useParams } from "react-router-dom";
import { useRouter } from 'next/router'


export default function Chat() {
  // const navigate = useRouter();
  // const { slug } = navigate.query
  // console.log(slug)
  // const { status } = navigate.query

  // const currentDialog = data.find((dialog) => dialog.slug === slug) || data[0];
  // console.log(currentDialog)
  // const [messages, setMessages] = useState([]);
  // const [completed, setCompleted] = useState(false);

  const navigate = useRouter();
  const { slug, status } = navigate.query;
  let currentDialog;
  console.log(slug)
  if(slug!==undefined){
    currentDialog = data.find((dialog) => dialog.slug === slug[0]) || data[0];
  }else{
    currentDialog = data[0]
  }
  console.log(currentDialog)

  const [messages, setMessages] = useState([]);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    console.log("Stop checking console xD");
    setMessages([]);
    setCompleted(false);
    if (status !== "completed") {
      currentDialog.messages &&
        currentDialog.messages.forEach((message, idx) => {
          setTimeout(function () {
            setMessages((prevMessages) => [...prevMessages, message]);
            if (idx + 1 === currentDialog.messages.length) {
              setTimeout(function () {
                if (slug === "portfolio") {
                  // navigate.push("/portfolio");
                }
                setCompleted(true);
              }, 1500);
            }
          }, idx * 1500);
        });
    } else {
      setMessages(currentDialog.messages);
      setCompleted(true);
    }
  }, [slug, status]);

  const containerMotion = {
    show: {
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const itemMotion = {
    hidden: { x: -100, scale: 0, opacity: 0 },
    show: { x: 0, opacity: 1, scale: 1 },
  };

  return (
    <section className={style.Chat}>
      <motion.div
        variants={containerMotion}
        initial="hidden"
        animate="show"
          className={style.Window}
      >
        <div className="imageContainer">
          <Loader />
          {/* <img className="Head" src={Head} alt="Head" /> */}
          <Image className={style.Head} src={Head}/>
        </div>

        <div className={style.MessageContainer}>
          {messages &&
            messages.map((message, idx) => {
              return (
                <motion.div key={`message-${idx}`} variants={itemMotion}>
                  <Message status={status} message={message} />
                </motion.div>
              );
            })}
        </div>
        {!completed && <Typing />}
        <div className={style.AnswerContainer}>
          {completed &&
            currentDialog.answers &&
            currentDialog.answers.map((message, idx) => {
              return (
                <motion.div key={`answer-${idx}`} variants={itemMotion}>
                  <Answer data={message} />
                </motion.div>
              );
            })}
        </div>
      </motion.div>
    </section>
  );
}
