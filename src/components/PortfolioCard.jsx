import { Card, Modal, Spacer, Text } from '@nextui-org/react';
import PropTypes from 'prop-types';
import { useState } from 'react';

function PortfolioCard({ item }, props) {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => setVisible(false);

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        {item.map((Val) => {
          return (
            <div className="col-lg-4" key={Val.id}>
              <Card isHoverable isPressable onPress={handler}>
                <Card.Image
                  src={Val.src}
                  objectFit="cover"
                  width="100%"
                  height={props.height}
                  alt={Val.alt}></Card.Image>
              </Card>
              <Modal
                closeButton
                blur
                open={visible}
                onClose={closeHandler}
                width={'80%'}
                css={{ display: 'flex' }}>
                <Modal.Header>
                  <Text h4>Project Title</Text>
                </Modal.Header>
                <Modal.Body>
                  <div className="row">
                    <div className="col-lg-6">
                      <Spacer y={1} />
                      <img src={Val.src} />
                    </div>
                    <div className="col-lg-6 know-me-more-li">
                      <ul>
                        <li>
                          <Text weight="medium">
                            <b className="portfolio-li-b">Project Info:</b>
                            <Spacer y={1} />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                          </Text>
                        </li>
                        <Spacer y={2} />
                        <li>
                          <Text weight="medium">
                            <b className="portfolio-li-b">Project Details:</b>
                            <Spacer y={1} />
                          </Text>
                        </li>
                        <li>
                          <Text weight="medium">
                            <b className="li-b">Client:</b>Teoman Kirma
                          </Text>
                          <hr className="li-hr" />
                        </li>
                        <li>
                          <Text weight="medium">
                            <b className="li-b">Technologies:</b>
                          </Text>
                          <hr className="li-hr" />
                        </li>
                        <li>
                          <Text weight="medium">
                            <b className="li-b">Industry:</b>
                          </Text>
                          <hr className="li-hr" />
                        </li>
                        <li>
                          <Text weight="medium">
                            <b className="li-b">Date:</b>
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
        })}
      </div>
    </div>
  );
}

PortfolioCard.propTypes = {
  src: PropTypes.string,
  height: PropTypes.number,
  alt: PropTypes.string,
  item: PropTypes.array
};

export default PortfolioCard;

{
  /* <Card isHoverable isPressable onPress={handler}>
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
          <Text h4>Project Title</Text>
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
                    <b className="portfolio-li-b">Project Info:</b>
                    <Spacer y={1} />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Text>
                </li>
                <Spacer y={2} />
                <li>
                  <Text weight="medium">
                    <b className="portfolio-li-b">Project Details:</b>
                    <Spacer y={1} />
                  </Text>
                </li>
                <li>
                  <Text weight="medium">
                    <b className="li-b">Client:</b>Teoman Kirma
                  </Text>
                  <hr className="li-hr" />
                </li>
                <li>
                  <Text weight="medium">
                    <b className="li-b">Technologies:</b>
                  </Text>
                  <hr className="li-hr" />
                </li>
                <li>
                  <Text weight="medium">
                    <b className="li-b">Industry:</b>
                  </Text>
                  <hr className="li-hr" />
                </li>
                <li>
                  <Text weight="medium">
                    <b className="li-b">Date:</b>
                  </Text>
                  <hr className="li-hr" />
                </li>
              </ul>
            </div>
          </div>
        </Modal.Body>
      </Modal> */
}
