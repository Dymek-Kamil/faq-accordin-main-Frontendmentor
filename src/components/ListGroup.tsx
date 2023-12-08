import ListGroup from "react-bootstrap/esm/ListGroup";
import { useState } from "react";
import "../App.css";
import Paragraph from "./Paragraph";
import { Image } from "react-bootstrap";
import iconPlus from "../assets/images/icon-plus.svg";
import iconMinus from "../assets/images/icon-minus.svg";
interface Props {
  items: string[];
}

const ListGroupComponent = ({ items }: Props) => {
  const [selectedIndex, setIndex] = useState(-1);
  const paragraphItems = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    "of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
  ];

  return (
    <>
      <ListGroup as="ul">
        {items.map((item, index) => (
          <ListGroup.Item
            as="li"
            key={item}
            className={
              selectedIndex === index
                ? "item-active rounded-0 border-0 border-bottom p-4"
                : "rounded-0 border-0 border-bottom p-4"
            }
            onClick={() => setIndex(index)}
          >
            <div className="d-flex justify-content-between">
              {item}
              <Image
                src={selectedIndex === index ? iconMinus : iconPlus}
              ></Image>
            </div>
            {index === selectedIndex ? (
              <Paragraph
                items={paragraphItems}
                selectedIndex={selectedIndex}
              ></Paragraph>
            ) : null}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default ListGroupComponent;
