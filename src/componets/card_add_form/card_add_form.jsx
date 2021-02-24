import React, { useRef } from "react";
import styles from "./card_add_form.module.css";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";

const CardAddForm = ({ onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const themeRef = useRef();


  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value,
      company: companyRef.current.value,
      theme : themeRef.current.value,
      title: titleRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    onAdd(card);
    formRef.current.reset();
  };

  return (
    <form className={styles.form} ref={formRef}>
      <input
        className={styles.input}
        ref={nameRef}
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        className={styles.input}
        ref={companyRef}
        type="text"
        name="company"
        placeholder="Company"
      />
      <select className={styles.select} ref={themeRef} name="theme">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        ref={titleRef}
        type="text"
        name="title"
        placeholder="title"
      />
      <input
        className={styles.input}
        ref={emailRef}
        type="text"
        name="email"
        placeholder="email"
      />
      <textarea className={styles.textarea} ref={messageRef} name="message" />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
