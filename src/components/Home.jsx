import { Typewriter } from 'react-simple-typewriter';
import { Text, Button, Spacer, Container, Row, Col, Avatar } from '@nextui-org/react';
import photo from '../images/photo.jpeg';

function Home() {
  return (
    <div className="home section" id="home">
      <Container>
        <Spacer y={3} />
        <Row>
          <Col className="center-item">
            <Avatar
              src={photo}
              color="success"
              bordered
              zoomed
              css={{ height: '200px', width: '200px' }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Spacer y={1} />
            <Text h2>Welcome</Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Spacer y={1} />
            <Text h1 weight="semibold">
              <Typewriter
                words={[
                  "I'm Teoman Kirma.",
                  "I'm a Software Engineer.",
                  "I'm a Frontend Developer."
                ]}
                loop={0}
                cursor={true}
                cursorColor="#17c964"
              />
            </Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Spacer y={1} />
            <Text h3 weight="medium">
              based in Istanbul, Turkiye.
            </Text>
            <Spacer y={2} />
          </Col>
        </Row>
        <Row>
          <Col className="center-item">
            <Button color="success" size="lg" rounded auto ghost css={{ zIndex: '0' }}>
              Hire Me
            </Button>
          </Col>
        </Row>
        <Spacer y={3} />
      </Container>
    </div>
  );
}

export default Home;
