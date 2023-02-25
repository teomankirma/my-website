import SectionHeader from "./SectionHeader";
import { Text, Spacer, Button } from "@nextui-org/react";
import ResumeCard from "./ResumeCard";
import ResumeProgress from "./ResumeProgress";

function Resume() {
  return (
    <div className="resume section">
      <div className="row">
        <SectionHeader header="Resume" />
      </div>
      <Spacer y={3} />
      <div className="row">
        <div className="my-education col-lg-6">
          <Text h3 css={{ textAlign: "left" }}>
            My Education
          </Text>
          <ResumeCard
            badge="2008-2012"
            cardHeader="Abdi Ibrahim First School"
            cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ResumeCard
            badge="2012-2016"
            cardHeader="Istanbul Academy College Middle School"
            cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ResumeCard
            badge="2016-2020"
            cardHeader="Emlakbank Suleyman Demirel High School"
            cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ResumeCard
            badge="2020-"
            cardHeader="Nisantasi University Software Engineering"
            cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
        <div className="my-experience col-lg-6">
          <Text h3 css={{ textAlign: "left" }}>
            My Experience
          </Text>
          <ResumeCard
            badge="2023-"
            cardHeader="Jr. Frontend Developer"
            cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ResumeCard
            badge="2023-"
            cardHeader="Jr. Frontend Developer"
            cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ResumeCard
            badge="2023-"
            cardHeader="Jr. Frontend Developer"
            cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ResumeCard
            badge="2023-"
            cardHeader="Jr. Frontend Developer"
            cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
      <Spacer y={5} />
      <div className="row">
        <Text h3 css={{ textAlign: "left" }}>
          My Skills
        </Text>
        <ResumeProgress
          firstHeader="Web Design"
          firstValue={60}
          secondHeader="JavaScript"
          secondValue={75}
          thirdHeader="React JS"
          thirdValue={50}
        />
        <ResumeProgress
          firstHeader="HTML"
          firstValue={80}
          secondHeader="CSS"
          secondValue={60}
          thirdHeader="Bootstrap"
          thirdValue={75}
        />
      </div>
      <Spacer y={2} />
      <div className="col-lg-12 d-flex justify-content-center">
        <Button
          color="success"
          size="xl"
          rounded
          ghost
          css={{ textAlign: "center" }}
        >
          Download CV <i class="fa-solid fa-download"></i>
        </Button>
      </div>
      <Spacer y={3} />
    </div>
  );
}

export default Resume;
