import { Typewriter } from "react-simple-typewriter";
import { Text, Button, Spacer } from "@nextui-org/react";

function Home() {
  return (
    <div className="home row">
      <div className="col-lg-12">
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
          />
        </Text>
      </div>
      <div className="col-lg-12">
        <Spacer y={1} />
        <Text h3 weight="medium">
          based in Izmir, Turkiye.
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
      <Spacer y={2} />
    </div>
  );
}

export default Home;
