interface Props {
  items: string[];
  selectedIndex: number;
}

const Paragraph = ({ items, selectedIndex }: Props) => {
  return items.map((item, index) => {
    if (selectedIndex === index) {
      return <p className="paragraph">{item}</p>;
    }
  });
};

export default Paragraph;
