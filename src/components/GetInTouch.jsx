import SectionHeader from './SectionHeader';
import { Spacer, Text } from '@nextui-org/react';
import { useContext } from 'react';
import { Context } from './App';
import hi from '../images/hi.gif';
import ContactUsForm from './ContactUsForm';

function GetInTouch() {
  const context = useContext(Context);

  return (
    <div className="get-in-touch section" id="contactMe">
      <div className="row">
        <SectionHeader header={context.language.getInTouch} />
      </div>
      <Spacer y={3} />
      <div className="row">
        <div className="col-lg-3">
          <div className="contact-div">
            <Text h4>{context.language.contact}</Text>
            <img src={hi} className="get-in-touch-gif" />
            <Spacer y={1} />
            <a className="get-in-touch-info" href="mailto:teomankirma@gmail.com">
              <Text size="$lg" h6>
                <i className="fa-solid fa-envelope"></i>
                {context.language.email}
              </Text>
            </a>
            <Spacer y={2} />
            <Text h4>{context.language.followMe}</Text>
            <Spacer y={1} />
            <Text>
              <a href="https://twitter.com/teomankirma">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://github.com/teomankirma">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/teomankirma/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </Text>
            <Spacer y={1} />
          </div>
        </div>
        <div className="col-lg-9">
          <ContactUsForm />
        </div>
      </div>
      <Spacer y={3} />
    </div>
  );
}

export default GetInTouch;
