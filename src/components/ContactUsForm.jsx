import { Input, Textarea, Button, Spacer, Text } from '@nextui-org/react';

function ContactUsForm() {
  return (
    <div className="contact-div">
      <Text h4>SEND US A NOTE</Text>
      <Spacer y={1} />
      <form>
        <Input
          label="Full Name"
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
