import React from "react";
import style from "../styles/Header.module.scss";
import Github from "./imagesjs/Github"
import LinkedIn from "./imagesjs/LinkedIn"

export default function Header() {
  return (
    <header role="header" className={style.Header}>
      <nav className={style.MainMenu}>
        <ul>
          <li>
            <a
              href="https://github.com/bharatchills"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/imsonibharat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
