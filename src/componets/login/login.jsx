import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from './login.module.css';

const Login = ({authService}) => {
  const history = useHistory();
  
  const goToMaker = (userId) => {
    history.push({
      pathname: '/maker',
      state : {id: userId}
    });
  }

  const onClick = (event) => {
    authService
    .login(event.currentTarget.textContent)
    .then(data => goToMaker(data.user.uid));
  }

  useEffect(()=> {
    authService.onAuthChange(user => {
      user && goToMaker(user.uid);
    })
  })
  
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
