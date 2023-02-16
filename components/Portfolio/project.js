import React from "react";
import styles from "./../../styles/Portfolio.module.scss"

export default function Project(props) {
  return (
    <div className={styles.Project}>
      <div className={styles.front}>
        {props.data.logo ? (
          <img src={props.data.logo} alt="Logo" />
        ) : (
          props.data.name
        )}
      </div>
      <div className={styles.back}>
        <div>
          <p>{props.data.discription}</p>
          {props.data.demo && (
            <a target="_blank" rel="noopener noreferrer" href={props.data.demo}>
              Demo
            </a>
          )}
          {props.data.github && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.data.github}
            >
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
