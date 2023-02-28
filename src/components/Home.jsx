import { Typewriter } from "react-simple-typewriter";
import { Text, Button, Spacer, Container, Row, Col } from "@nextui-org/react";

function Home() {
  return (
    <div className="home section" id="home">
      <Container>
        <Spacer y={6} />
        <Row>
          <Col>
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
                  "I'm a Frontend Developer.",
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
          <Col className="hire-me-btn">
            <Button
              color="success"
              size="lg"
              rounded
              auto
              ghost
              css={{ zIndex: "0" }}
            >
              Hire Me
            </Button>
          </Col>
        </Row>
        <Spacer y={6} />
      </Container>
    </div>
  );
}

export default Home;

{
  /* <div className="col-lg-12">
<Spacer y={6} />
<Text h2>Welcome</Text>
</div>
<div className="col-lg-12">
<Spacer y={1} />
<Text h1 weight="semibold">
  <Typewriter
    words={[
      "I'm Teoman Kirma.",
      "I'm a Software Engineer.",
      "I'm a Frontend Developer.",
    ]}
    loop={0}
    cursor={true}
    cursorColor="#17c964"
  />
</Text>
</div>
<div className="col-lg-12">
<Spacer y={1} />
<Text h3 weight="medium">
  based in Istanbul, Turkiye.
</Text>
<Spacer y={2} />
</div>
<div className="col-lg-12 d-flex justify-content-center">
<Button
  color="success"
  size="lg"
  rounded
  auto
  ghost
  css={{ textAlign: "center" }}
>
  Hire Me
</Button>
</div>
<Spacer y={6} /> */
}
