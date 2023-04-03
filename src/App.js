import React from "react";
import "./App.css";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import Container from "./components/Container/Container";


const App = (props) => {
  return (
    <div id="wrap">
      <Header/>
      {props.children}
      <section>
        <Container/>
      </section>
      <Footer/>
    </div>
  );
};

export default App;