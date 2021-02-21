import React, { useState } from "react";
import styles from "./card.module.css";

const Card = ({ card }) => {
  const { id, name, theme, email, fileURL, company, message } = card;
  // const [bgColor, setBgColor] = useState([]);

  // const handleBgColor = (event) => {
  //   setBgColor(event.target.value);
    
  // }
  const DEFAULT_IMG = "./images/default_logo.png";
  const url = fileURL || DEFAULT_IMG;

  return (
    <li key={id} className={`${styles.card} ${getStyles(theme)}`}>
      {/* <h5>{bgColor}</h5>
      <label htmlFor="bg" className={styles.choose_bg}>Choose color
      <select name="bg" onChange={handleBgColor}>
        <option value="choose">Choose</option>
        <option value="white">White</option>
        <option value="black">Black</option>
        <option value="colorFull">Color Full</option>
      </select>
      </label> */}

      <img className={styles.avatar} src={url} alt="profile img" />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.company}>{company}</p>
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
