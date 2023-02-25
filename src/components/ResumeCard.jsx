import { Card, Text, Badge, Spacer } from "@nextui-org/react";

function ResumeCard(props) {
  return (
    <div>
      <Card>
        <Card.Header>
          <Badge color="success" size="lg">
            {props.badge}
          </Badge>
        </Card.Header>
        <Card.Body>
          <Text h4>{props.cardHeader}</Text>
          <Text>{props.cardText}</Text>
        </Card.Body>
      </Card>
      <Spacer y={1} />
    </div>
  );
}

export default ResumeCard;
