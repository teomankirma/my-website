import { Input, Textarea, Button, Spacer, Text } from '@nextui-org/react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useAlert } from 'react-alert';

function ContactUsForm() {
  const form = useRef();
  const alert = useAlert();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_40jsjer', 'template_h1g04xm', form.current, 'gzYzxyyT9NaGkkX1q').then(
      (result) => {
        console.log(result.text);
        e.target.reset();
        alert.show('Successfuly sent!', { type: 'success' });
      },
      (error) => {
        console.log(error.text);
        alert.show('Oops, something went wrong!', { type: 'error' });
      }
    );
  };

  return (
    <div className="contact-div">
      <Text h4>SEND US A NOTE</Text>
      <Spacer y={1} />
      <form ref={form} onSubmit={sendEmail}>
        <Input
          label="Full Name"
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
          label="Email"
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
          label="Message"
          name="message"
          placeholder="Tell us more about your needs..."
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
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactUsForm;
