import { Card, Modal, Spacer, Text } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { useState } from 'react';

function PortfolioCard(props) {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => setVisible(false);

  return (
    <div>
      <Card isHoverable isPressable onPress={handler}>
        <Card.Image
          src={props.src}
          objectFit="cover"
          width="100%"
          height={props.height}
          alt={props.alt}></Card.Image>
      </Card>
      <Modal
        closeButton
        blur
        open={visible}
        onClose={closeHandler}
        width={'80%'}
        css={{ display: 'flex' }}>
        <Modal.Header>
          <Text h4>{props.title}</Text>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <Spacer y={1} />
              <img src={props.src} />
            </div>
            <div className="col-lg-6 know-me-more-li">
              <ul>
                <li>
                  <Text weight="medium">
                    <b className="portfolio-li-b">{props.projectInfoText}</b>
                    <Spacer y={1} />
                    {props.projectInfo}
                  </Text>
                </li>
                <Spacer y={2} />
                <li>
                  <Text weight="medium">
                    <b className="portfolio-li-b">{props.projectDetailsText}</b>
                    <Spacer y={1} />
                  </Text>
                </li>
                <li>
                  <Text weight="medium">
                    <b className="li-b">{props.clientText}</b>
                    {props.client}
                  </Text>
                  <hr className="li-hr" />
                </li>
                <li>
                  <Text weight="medium">
                    <b className="li-b">{props.technologiesText}</b>
                    {props.technologies}
                  </Text>
                  <hr className="li-hr" />
                </li>
                <li>
                  <Text weight="medium">
                    <b className="li-b">{props.industryText}</b>
                    {props.industry}
                  </Text>
                  <hr className="li-hr" />
                </li>
                <li>
                  <Text weight="medium">
                    <b className="li-b">{props.dateText}</b>
                    {props.date}
                  </Text>
                  <hr className="li-hr" />
                </li>
              </ul>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

PortfolioCard.propTypes = {
  src: PropTypes.string,
  height: PropTypes.number,
  alt: PropTypes.string,
  title: PropTypes.string,
  projectInfo: PropTypes.string,
  projectInfoText: PropTypes.string,
  projectDetailsText: PropTypes.string,
  clientText: PropTypes.string,
  client: PropTypes.string,
  technologiesText: PropTypes.string,
  technologies: PropTypes.string,
  industryText: PropTypes.string,
  industry: PropTypes.string,
  dateText: PropTypes.string,
  date: PropTypes.string
};

export default PortfolioCard;
