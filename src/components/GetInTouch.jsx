import SectionHeader from "./SectionHeader";
import { Spacer, Text, Textarea, Button } from "@nextui-org/react";

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
            <Text h4>ADDRESS</Text>
            <Text size="$lg">
              4th Floor, Plot No.22, 145 Murphy Canyon Rd. San Diego CA 2028
            </Text>
            <Spacer y={1} />
            <Text size="$xl">
              <i className="fa-solid fa-phone"></i>(060) 444 434 444
            </Text>
            <Text size="$xl">
              <i className="fa-solid fa-envelope"></i>teomankirma@gmail.com
            </Text>
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
              <a href="https://www.linkedin.com/in/teoman-k%C4%B1rma-14ba31238/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </Text>
            <Spacer y={1} />
          </div>
        </div>
        <div className="col-lg-9">
          <div className="contact-div">
            <Text h4>SEND US A NOTE</Text>
            <Spacer y={1} />
            <Textarea
              placeholder="Name"
              rows={1}
              width="50%"
              css={{ paddingRight: "5%" }}
              bordered
              color="success"
              aria-label="getInTouchTextArea"
            />
            <Textarea
              placeholder="Email"
              rows={1}
              width="50%"
              bordered
              color="success"
              aria-label="getInTouchTextArea"
            />
            <Spacer y={1} />
            <Textarea
              placeholder="Tell us more about your needs..."
              rows={6}
              width="100%"
              bordered
              color="success"
              aria-label="getInTouchTextArea"
            />
            <Spacer y={1} />
            <div className="d-flex justify-content-center">
              <Button
                color="success"
                size="lg"
                rounded
                css={{ textAlign: "center" }}
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Spacer y={3} />
    </div>
  );
}

export default GetInTouch;
