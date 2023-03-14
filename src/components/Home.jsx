import { Typewriter } from 'react-simple-typewriter';
import { Text, Button, Spacer, Avatar } from '@nextui-org/react';
import PropTypes from 'prop-types';
import photo from '../images/photo.jpeg';

function Home(props) {
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
          <Text h2>{props.language.welcome}</Text>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Spacer y={1} />
          <Text h1 weight="semibold">
            <Typewriter
              words={props.language.typewriter}
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
            {props.language.location}
          </Text>
          <Spacer y={2} />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 center-item">
          <a href="#contactMe">
            <Button color="success" size="lg" rounded auto ghost css={{ zIndex: '0' }}>
              {props.language.hireMe}
            </Button>
          </a>
        </div>
      </div>
      <Spacer y={1} />
    </div>
  );
}

Home.propTypes = {
  language: PropTypes.object
};

export default Home;
