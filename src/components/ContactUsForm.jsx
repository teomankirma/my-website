import { Input, Textarea, Button, Spacer, Text } from '@nextui-org/react';
import emailjs from '@emailjs/browser';
import { useContext } from 'react';
import { Context } from './App';
import { useRef } from 'react';
import { useAlert } from 'react-alert';

function ContactUsForm() {
  const context = useContext(Context);

  const form = useRef();
  const alert = useAlert();

  const successMessage = context.language.alertSuccessText;
  const errorMessage = context.language.alertErrorText;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_40jsjer', 'template_h1g04xm', form.current, 'gzYzxyyT9NaGkkX1q').then(
      (result) => {
        console.log(result.text);
        e.target.reset();
        alert.show(successMessage, { type: 'success' });
      },
      (error) => {
        console.log(error.text);
        alert.show(errorMessage, { type: 'error' });
      }
    );
  };

  return (
    <div className="contact-div">
      <Text h4>{context.language.sendMeANote}</Text>
      <Spacer y={1} />
      <form ref={form} onSubmit={sendEmail}>
        <Input
          label={context.language.fullNameText}
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
          label={context.language.emailText}
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
          label={context.language.messageText}
          name="message"
          placeholder={context.language.messagePlaceholder}
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
            {context.language.sendMessageText}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactUsForm;
