import React from "react";
import styles from "./card.module.css";

const Card = ({ card }) => {
  const { id, name, title,  theme, email, fileURL, company, message } = card;

  const DEFAULT_IMG = "./images/default_logo.png";
  const url = fileURL || DEFAULT_IMG;

  return (
    <li key={id} className={`${styles.card} ${getStyles(theme)}`}>
      <img className={styles.avatar} src={url} alt="profile img" />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};

const getStyles = (theme) =>{
  switch (theme) {
    case 'light':
    return styles.light;
    case 'dark':
    return styles.dark;
    case 'colorful':
    return styles.colorful;
    default:
      throw new Error(`unkown theme : ${theme}`)
  }
}

export default Card;
