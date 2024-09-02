import React from "react";
import { Calendar, Button } from "./class-component";
import { Header, Content, Footer } from "./func-components";
import { Calculator2 } from "./calculator";
import { Eventdata2 } from "./event-data";
import RefsFunc from "./refs-func";
import Cart from "./sate-class";
import  Massagebox  from "./sate-func";
import "./style.css";
import {userContext} from './context';
import Header2 from './context-header2';
import Content2  from "./context-content2";

function App() {
  let[user,setUser] = React.useState('');
  const divStyle = {
    color: "red",
    backgroundColor: "powderblue",
    fontSize: "larger",
  };
  return (
    <>
    <userContext.Provider value={[user,setUser]}>
      <Header2/>
      <Content2/>
    </userContext.Provider>
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
