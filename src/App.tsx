import { useState } from "react";
import "./App.css";
import Container from "react-bootstrap/esm/Container";
import CardComponent from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
    >
      <CardComponent></CardComponent>
    </Container>
  );
}

export default App;
