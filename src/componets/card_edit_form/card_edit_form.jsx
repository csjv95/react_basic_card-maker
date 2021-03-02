import React, { useRef } from "react";
import styles from "./card_edit_form.module.css";
import Button from "../button/button";

const CardEditForm = ({ card, updateCard, deleteCard, FileInput }) => {
  const { name, theme, title, email, fileName, company,} = card;

  const nameRef = useRef("");
  const companyRef = useRef("");
  const selectRef = useRef();
  const titleRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");

  const onSubmit = (event) => {
    deleteCard(card);
  };

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        ref={nameRef}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
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
      </textarea>
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
