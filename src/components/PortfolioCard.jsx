import { Card } from '@nextui-org/react';
import PropTypes from 'prop-types';

function PortfolioCard(props) {
  return (
    <Card>
      <Card.Image
        src={props.src}
        objectFit="cover"
        width="100%"
        height={props.height}
        alt={props.alt}></Card.Image>
    </Card>
  );
}

PortfolioCard.propTypes = {
  src: PropTypes.string,
  height: PropTypes.number,
  alt: PropTypes.string
};

export default PortfolioCard;
