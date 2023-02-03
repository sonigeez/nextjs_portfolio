import React from 'react';
import style from "../../styles/Chat.module.scss";


export default function Message({ message }) {
	return <div className={style.Message}>{message}</div>;
}
