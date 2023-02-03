import React from "react";
// import { Link } from "react-router-dom";
import Link from 'next/link'
import style from "../../styles/Chat.module.scss";


import { useEffect, useState, useRef } from "react";

export default function Answer({ data }) {
  const createSVG = (width, height, radius) => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    const rectangle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );

    svg.setAttributeNS(
      "http://www.w3.org/2000/svg",
      "viewBox",
      `0 0 ${width} ${height}`
    );

    rectangle.setAttribute("x", "0");
    rectangle.setAttribute("y", "0");
    rectangle.setAttribute("width", "100%");
    rectangle.setAttribute("height", "100%");
    rectangle.setAttribute("rx", `${radius}`);
    rectangle.setAttribute("ry", `${radius}`);
    rectangle.setAttribute("pathLength", "10");

    svg.appendChild(rectangle);

    return svg;
  };
  const [isHover, setIsHover] = useState(false);
  const buttonRef = useRef(null);

  function onMouseEnterHandle() {
    setIsHover(true);
  }

  function onMouseLeaveHandle() {
    setIsHover(false);
  }

  function svgAnimation() {
    const button = buttonRef.current;
    // const style = getComputedStyle(button);
    const lines = document.createElement("div");
    lines.classList.add("lines");
    const groupTop = document.createElement("div");
    const groupBottom = document.createElement("div");
    const svg = createSVG(button.clientWidth, button.clientHeight, 10);

    groupTop.appendChild(svg);
    groupTop.appendChild(svg.cloneNode(true));
    groupTop.appendChild(svg.cloneNode(true));
    groupTop.appendChild(svg.cloneNode(true));

    groupBottom.appendChild(svg.cloneNode(true));
    groupBottom.appendChild(svg.cloneNode(true));
    groupBottom.appendChild(svg.cloneNode(true));
    groupBottom.appendChild(svg.cloneNode(true));

    lines.appendChild(groupTop);
    lines.appendChild(groupBottom);

    button.appendChild(lines);
  }

  useEffect(() => {
    svgAnimation();
  }, []);
  return (
    <Link
      ref={buttonRef}
      onMouseEnter={onMouseEnterHandle}
      // onMouseLeave={onMouseLeaveHandle}
      onAnimationEnd={onMouseLeaveHandle}
      className={isHover ? style.Answer+" "+"start animated-box" : style.Answer+ " animated-box"}
      href={data.link}
    >
      {data.label}
    </Link>
  );
}
