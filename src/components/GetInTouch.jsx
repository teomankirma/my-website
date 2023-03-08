import SectionHeader from './SectionHeader';
import { Spacer, Text } from '@nextui-org/react';
import hi from '../images/hi.gif';
import ContactUsForm from './ContactUsForm';

function GetInTouch() {
  return (
    <div className="get-in-touch section" id="contact">
      <div className="row">
        <SectionHeader header="Get In Touch" />
      </div>
      <Spacer y={3} />
      <div className="row">
        <div className="col-lg-3">
          <div className="contact-div">
            <Text h4>CONTACT</Text>
            <img src={hi} className="get-in-touch-gif" />
            <Spacer y={1} />
            <a className="get-in-touch-info" href="tel:+905342166935">
              <Text size="$lg" h6>
                <i className="fa-solid fa-phone"></i>
                +90 534 216 6935
              </Text>
            </a>
            <a className="get-in-touch-info" href="mailto:teomankirma@gmail.com">
              <Text size="$lg" h6>
                <i className="fa-solid fa-envelope"></i>
                teomankirma@gmail.com
              </Text>
            </a>
            <Spacer y={2} />
            <Text h4>FOLLOW ME</Text>
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
