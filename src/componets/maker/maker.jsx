import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService, FileInput }) => {
  const history = useHistory();
  const [cards, setCards] = useState({
    1: {
      id: 1,
      name: "SJ",
      theme: "light",
      title: "front-end",
      email: "sj@gamil.com",
      fileURL: null,
      company: "Google",
      message: "Hello World",
    },
    2: {
      id: 2,
      name: "Reem",
      theme: "dark",
      title: "back-end",
      email: "reem@gamil.com",
      fileURL: null,
      company: "Apple",
      message: "Hello World",
    },
    3: {
      id: 3,
      name: "Min",
      theme: "colorful",
      title: "front-end",
      email: "min@gamil.com",
      fileURL: null,
      company: "Amazon",
      message: "Hello World",
    },
  });

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const createOrUpdateCard = (card) => {
    setCards(cards => {
      const updated = {...cards};
      updated[card.id] = card;
      return updated;
    })
  };

  const deleteCard = (card) => {
    setCards(cards => {
      const updated = {...cards};
      delete updated[card.id];
      return updated;
    })
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          onAdd={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
          FileInput={FileInput}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
