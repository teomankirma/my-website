import { Input, Textarea, Button, Spacer, Text } from '@nextui-org/react';
import emailjs from '@emailjs/browser';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useAlert } from 'react-alert';

function ContactUsForm(props) {
  const form = useRef();
  const alert = useAlert();

  const success = props.alertSuccessText;
  const errorMessage = props.alertErrorText;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_40jsjer', 'template_h1g04xm', form.current, 'gzYzxyyT9NaGkkX1q').then(
      (result) => {
        console.log(result.text);
        e.target.reset();
        alert.show({ success }, { type: 'success' });
      },
      (error) => {
        console.log(error.text);
        alert.show({ errorMessage }, { type: 'error' });
      }
    );
  };

  return (
    <div className="contact-div">
      <Text h4>{props.sendMeANote}</Text>
      <Spacer y={1} />
      <form ref={form} onSubmit={sendEmail}>
        <Input
          label={props.fullNameText}
          name="from_name"
          type="text"
          width="50%"
          css={{ paddingRight: '5%' }}
          bordered
          color="success"
          clearable
          aria-label="getInTouchInput"
          required={true}
        />
        <Input
          label={props.emailText}
          name="from_email"
          type="email"
          width="50%"
          bordered
          clearable
          color="success"
          aria-label="getInTouchInput"
          required={true}
        />
        <Spacer y={1} />

        <Textarea
          label={props.messageText}
          name="message"
          placeholder="Tell me more about your needs..."
          rows={6}
          fullWidth={true}
          bordered
          clearable
          color="success"
          aria-label="getInTouchInput"
          required={true}
        />
        <Spacer y={1} />
        <div className="d-flex justify-content-center">
          <Button
            color="success"
            size="lg"
            type="submit"
            rounded
            css={{ textAlign: 'center', zIndex: '0' }}>
            {props.sendMessageText}
          </Button>
        </div>
      </form>
    </div>
  );
}

ContactUsForm.propTypes = {
  language: PropTypes.object,
  sendMeANote: PropTypes.string,
  fullNameText: PropTypes.string,
  emailText: PropTypes.string,
  messageText: PropTypes.string,
  sendMessageText: PropTypes.string,
  alertSuccessText: PropTypes.string,
  alertErrorText: PropTypes.string
};

export default ContactUsForm;
