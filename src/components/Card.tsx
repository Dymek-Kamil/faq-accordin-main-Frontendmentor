import Card from "react-bootstrap/esm/Card";
import { Image } from "react-bootstrap";
import iconStar from "../assets/images/icon-star.svg";
import ListGroupComponent from "./ListGroup";
import "../App.css";

const CardComponent = () => {
  const listItems = [
    "What is Frontend Mentor, and how will it help me?",
    "Is Frontend Mentor free?",
    "Can I use Frontend Mentor projects in my portfolio?",
    "How can I get help if I'm stuck on a challenge?",
  ];

  return (
    <>
      <Card
        className="rounded p-4"
        style={{
          width: "40rem",
          background: "var(--white)",
        }}
      >
        <Card.Title className="d-flex flex-row">
          <Image src={iconStar} rounded />
          <h1 className="display-2 ms-4">FAQs</h1>
        </Card.Title>
        <Card.Body>
          <ListGroupComponent items={listItems}></ListGroupComponent>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardComponent;
