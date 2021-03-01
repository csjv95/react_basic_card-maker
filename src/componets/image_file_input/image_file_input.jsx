import React, { useRef, useState } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const [loading, setLoading] = useState(false);
  
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    setLoading(true);
    const upload = await imageUploader.upload(event.target.files[0]);
    onFileChange({
      name: upload.original_filename,
      url: upload.url,
    });
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        ref={inputRef}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />

      {!loading && <button className={`${styles.button} ${name && styles.blue }`} onClick={onButtonClick}>
        {name || "No image"}
      </button>}

      {loading &&  <button className={styles.loading} onClick={onButtonClick} /> }
    </div>
  );
};

export default ImageFileInput;
