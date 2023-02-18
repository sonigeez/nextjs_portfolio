import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import Header from "../components/Header";

export default function App({ Component, pageProps }: AppProps) {
  function eyeball(event:any) {
    console.log('check')
      const eye = document.querySelectorAll('.eye');
      eye.forEach(function(eye:any) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotation = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate("+rotation+"deg)"
      })
    }
  return (
    <div onMouseMove={eyeball}>
      <Header />
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
