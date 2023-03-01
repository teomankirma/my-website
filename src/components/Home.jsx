import { Typewriter } from 'react-simple-typewriter';
import { Text, Button, Spacer, Avatar } from '@nextui-org/react';
import photo from '../images/photo.jpeg';

function Home() {
  return (
    <div className="home section" id="home">
      <div className="row">
        <Spacer y={1} />
        <div className="center-item col-lg-12">
          <Avatar
            src={photo}
            color="success"
            bordered
            zoomed
            css={{ height: '200px', width: '200px' }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Spacer y={1} />
          <Text h2>Welcome</Text>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Spacer y={1} />
          <Text h1 weight="semibold">
            <Typewriter
              words={["I'm Teoman Kirma.", "I'm a Software Engineer.", "I'm a Frontend Developer."]}
              loop={0}
              cursor={true}
              cursorColor="#17c964"
            />
          </Text>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Spacer y={1} />
          <Text h3 weight="medium">
            based in Istanbul, Turkiye.
          </Text>
          <Spacer y={2} />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 center-item">
          <Button color="success" size="lg" rounded auto ghost css={{ zIndex: '0' }}>
            Hire Me
          </Button>
        </div>
      </div>
      <Spacer y={1} />
    </div>
  );
}

export default Home;
