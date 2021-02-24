import React, { useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";



const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
       id : 1,
       name : 'SJ',
       theme : 'light',
       title : 'front-end',
       email : 'sj@gamil.com',
       fileURL : null,
       company : 'Google',
       message : 'Hello World'
     },
    {
       id : 2,
       name : 'Reem',
       theme : 'dark',
       title : 'back-end',
       email : 'reem@gamil.com',
       fileURL : null,
       company : 'Apple',
       message : 'Hello World'
     },
     {
       id : 3,
       name : 'Min',
       theme : 'colorful',
       title : 'front-end',
       email : 'min@gamil.com',
       fileURL : null,
       company : 'Amazon',
       message : 'Hello World'    
     }
   ])
  const history = useHistory();
  

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

  const onAdd = (card) => {
    const update =[...cards, card]
    setCards(update)
  }

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} onAdd={onAdd}/>
        <Preview cards={cards}/>
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
