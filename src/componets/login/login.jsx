import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from './login.module.css';

const Login = ({authService}) => {
  const onClick = (event) => {
    authService.login(event.currentTarget.textContent).then(console.log);
  }
  
  return (
    <section className={styles.login}>
      <Header />
      <section >
        <h2>login</h2>
        <ul>
          <li> 
            <button className={styles.btn} onClick={onClick}>Google</button>
          </li>
          <li>
            <button className={styles.btn} onClick={onClick}>Github</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
