import { Card } from "@nextui-org/react";

function PortfolioCard(props) {
  return (
    <Card>
      <Card.Image
        src={props.src}
        objectFit="cover"
        width="100%"
        height={props.height}
        alt={props.alt}
      ></Card.Image>
    </Card>
  );
}

export default PortfolioCard;
