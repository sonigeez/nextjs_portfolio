// import { Link } from "react-router-dom";
import chatSvg from "../public/chat.svg";
import Image from "next/image";
import Link from 'next/link'

export default function Certifcate(){
    return(
        <div className="certificates">
               <Link className="backButton" href="/chat/start/completed">
    <Image alt="Chat" src={chatSvg}/> Go back to chatting.
      </Link>
            <div className="cert">
        <p>I don't believe in certificates, certificates are cheap and useless to show your skills, look at my projects instead</p></div>
        <img src="https://media.tenor.com/UiUFIuFzuH0AAAAC/memes-wrong-number.gif" alt="this slowpoke moves"  width="350" />
        </div>
    )
}