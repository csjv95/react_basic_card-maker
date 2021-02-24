import React, { useRef, useState } from "react";
import styles from "./card_edit_form.module.css";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";

const CardEditForm = ({ card, updateCard, deleteCard }) => {
  const { id, name, theme, title, email, fileURL, company, message } = card;

  // const nameRef = useRef('');
  const [nameWrite, setNameWrite] = useState(name);
  const companyRef = useRef("");
  const selectRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef("");
  const messageRef = useRef("");

  const onSubmit = (event) => {
    deleteCard(card);
  };

  const onChange = (event) => {
    if(event.currentTarget == null) {
      return
    }

    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onChangeTwo = (event) => {
    setNameWrite(event.target.value);
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        // ref={nameRef}
        type="text"
        name="name"
        value={nameWrite}
        onChange={onChangeTwo}
      />
      <input
        className={styles.input}
        ref={companyRef}
        type="text"
        name="company"
        value={company}
        onChange={onChange}
      />
      <select
        className={styles.select}
        ref={selectRef}
        name="theme"
        value={theme}
        onChange={onChange}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        ref={titleRef}
        type="text"
        name="title"
        value={title}
        onChange={onChange}
      />
      <input
        className={styles.input}
        ref={emailRef}
        type="text"
        name="email"
        value={email}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        ref={messageRef}
        name="message"
        onChange={onChange}
      >
        {message}
      </textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
