import SectionHeader from './SectionHeader';
import { Spacer, Text } from '@nextui-org/react';
import PropTypes from 'prop-types';
import hi from '../images/hi.gif';
import ContactUsForm from './ContactUsForm';

function GetInTouch(props) {
  return (
    <div className="get-in-touch section" id="contactMe">
      <div className="row">
        <SectionHeader header={props.language.getInTouch} />
      </div>
      <Spacer y={3} />
      <div className="row">
        <div className="col-lg-3">
          <div className="contact-div">
            <Text h4>{props.language.contact}</Text>
            <img src={hi} className="get-in-touch-gif" />
            <Spacer y={1} />
            <a className="get-in-touch-info" href="tel:+905342166935">
              <Text size="$lg" h6>
                <i className="fa-solid fa-phone"></i>
                {props.language.phoneNumber}
              </Text>
            </a>
            <a className="get-in-touch-info" href="mailto:teomankirma@gmail.com">
              <Text size="$lg" h6>
                <i className="fa-solid fa-envelope"></i>
                {props.language.email}
              </Text>
            </a>
            <Spacer y={2} />
            <Text h4>{props.language.followMe}</Text>
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
          <ContactUsForm
            sendMeANote={props.language.sendMeANote}
            fullNameText={props.language.fullNameText}
            emailText={props.language.getInTouchEmailText}
            messageText={props.language.messageText}
            sendMessageText={props.language.sendMessageText}
            alertSuccessText={props.language.alertSuccessText}
            alertErrorText={props.language.alertErrorText}
          />
        </div>
      </div>
      <Spacer y={3} />
    </div>
  );
}

GetInTouch.propTypes = {
  language: PropTypes.object
};

export default GetInTouch;
