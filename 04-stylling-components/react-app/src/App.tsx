import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BsFillCalendarFill } from "react-icons/bs";
import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  return (
    <>
      <ListGroup />
      <BsFillCalendarFill color="red" size={50} />
    </>
  );
}

export default App;
