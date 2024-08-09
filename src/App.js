import React from "react";
import Calendar from "./class-component";
import { Header, Content, Footer } from "./func-components";
import "./style.css";
function App() {
  const divStyle = {
    color: "red",
    backgroundColor: "powderblue",
    fontSize: "larger",
  };
  return (
    <>
    <Header/>
      <div style={divStyle}>Hello React</div>
      <h2>DeveloperThai.com</h2>
      <div className="title">React & React Native</div>
      <p>
        <center>
          <Calendar />
        </center>
      </p>
      <Content/>
      <Footer/>
    </>
  );
}
export default App;
