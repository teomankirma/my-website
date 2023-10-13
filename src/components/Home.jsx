import { Typewriter } from 'react-simple-typewriter';
import { Text, Button, Spacer, Avatar } from '@nextui-org/react';
import { useContext } from 'react';
import { Context } from './App';
import photo from '../images/photo.png';

function Home() {
  const context = useContext(Context);

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
          <Text h2>{context.language.welcome}</Text>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Spacer y={2} />
          <Text h2 weight="bold">
            <Typewriter
              words={context.language.typewriter}
              loop={0}
              cursor={true}
              cursorColor="#17c964"
            />
          </Text>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Spacer y={2} />
          <Text h3 weight="medium">
            {context.language.location}
          </Text>
          <Spacer y={2} />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 center-item">
          <a href="#contactMe">
            <Button color="success" size="lg" rounded auto ghost css={{ zIndex: '0' }}>
              {context.language.hireMe}
            </Button>
          </a>
        </div>
      </div>
      <Spacer y={1} />
    </div>
  );
}

export default Home;
