import React, { useRef, useState } from "react";
import styles from "./card_add_form.module.css";
import Button from "../button/button";

const CardAddForm = ({ onAdd, FileInput }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const themeRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = (file) => {
    console.log(file);
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value,
      company: companyRef.current.value,
      theme: themeRef.current.value,
      title: titleRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
    };
    onAdd(card);
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
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
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
