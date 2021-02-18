import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

const Login = ({authService}) => {
  const onClick = (event) => {
    authService.login(event.currentTarget.textContent).then(console.log);
  }
  
  return (
    <section>
      <Header />
      <section>
        <h1>login</h1>
        <ul>
          <li> 
            <button onClick={onClick}>Google</button>
          </li>
          <li>
            <button onClick={onClick}>Github</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
