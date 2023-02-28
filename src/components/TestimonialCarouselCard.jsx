import { Card, Text, Avatar } from '@nextui-org/react';
import PropTypes from 'prop-types';

function TestimonialCarouselCard(props) {
  return (
    <Card css={{ width: '50%', padding: '2%', margin: 'auto', marginBottom: '5%' }}>
      <Card.Header>
        <Avatar src={props.image} size="xl" />
        <div className="col">
          <Text h5 css={{ paddingLeft: '5%', textAlign: 'left' }}>
            {props.name}
          </Text>
          <Text h6 css={{ color: 'gray', paddingLeft: '5%', textAlign: 'left' }}>
            {props.who}
          </Text>
        </div>
      </Card.Header>
      <Card.Body>
        <Text>{props.comment}</Text>
      </Card.Body>
      <Card.Footer>
        <Text>⭐️⭐️⭐️⭐️⭐️</Text>
      </Card.Footer>
    </Card>
  );
}

TestimonialCarouselCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  who: PropTypes.string,
  comment: PropTypes.string
};

export default TestimonialCarouselCard;
