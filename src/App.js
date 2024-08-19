import React from "react";
import { Calendar, Button } from "./class-component";
import { Header, Content, Footer } from "./func-components";
import { Calculator2 } from "./calculator";
import { Eventdata2 } from "./event-data";
import RefsFunc from "./refs-func";
import Cart from "./sate-class";
import  Massagebox  from "./sate-func";
import "./style.css";
function App() {
  const divStyle = {
    color: "red",
    backgroundColor: "powderblue",
    fontSize: "larger",
  };
  return (
    <>
      <Header />
      <div style={divStyle}>Hello React</div>
      <h2>DeveloperThai.com</h2>
      <div className="title">React & React Native</div>
      <p>
        <center>
          <Calendar />
          <br />
          <Button />
          <Calculator2 />
          <br />
          <Eventdata2 />
          <br />
          <RefsFunc />
          <Cart/>
          <Massagebox/>
        </center>
      </p>

      <Content />
      <Footer />
    </>
  );
}
export default App;
