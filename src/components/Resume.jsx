import SectionHeader from './SectionHeader';
import { Text, Spacer, Button } from '@nextui-org/react';
import PropTypes from 'prop-types';
import ResumeCard from './ResumeCard';
import ResumeProgress from './ResumeProgress';

function Resume(props) {
  return (
    <div className="resume section" id="resume">
      <div className="row">
        <SectionHeader header={props.language.resumeHeader} />
      </div>
      <Spacer y={3} />
      <div className="row">
        <div className="my-education col-lg-6">
          <Text h3 css={{ textAlign: 'left' }}>
            {props.language.myEducation}
          </Text>
          <Spacer y={2} />
          <ResumeCard
            badge={props.language.primarySchoolBadge}
            cardHeader={props.language.primarySchool}
            cardText={props.language.primarySchoolText}
          />
          <ResumeCard
            badge={props.language.middleSchoolBadge}
            cardHeader={props.language.middleSchool}
            cardText={props.language.middleSchoolText}
          />
          <ResumeCard
            badge={props.language.highSchoolBadge}
            cardHeader={props.language.highSchool}
            cardText={props.language.highSchoolText}
          />
          <ResumeCard
            badge={props.language.universityBadge}
            cardHeader={props.language.university}
            cardText={props.language.universityText}
          />
          <Spacer y={1} />
        </div>
        <div className="my-experience col-lg-6">
          <Text h3 css={{ textAlign: 'left' }}>
            {props.language.myExperience}
          </Text>
          <Spacer y={2} />
          <ResumeCard
            badge={props.language.myExperienceBadge}
            cardHeader={props.language.myExperienceName}
            cardText={props.language.myExperienceText}
          />
        </div>
      </div>
      <Spacer y={4} />
      <div className="row">
        <Text h3 css={{ textAlign: 'left' }}>
          {props.language.mySkills}
        </Text>
        <ResumeProgress
          firstHeader={props.language.resumeProgressWebDesign}
          firstValue={props.language.resumeProgressWebDesignValue}
          secondHeader={props.language.resumeProgressJavaScript}
          secondValue={props.language.resumeProgressJavaScriptValue}
          thirdHeader={props.language.resumeProgressReactJS}
          thirdValue={props.language.resumeProgressReactJSValue}
        />
        <ResumeProgress
          firstHeader={props.language.resumeProgressHTML}
          firstValue={props.language.resumeProgressHTMLValue}
          secondHeader={props.language.resumeProgressCSS}
          secondValue={props.language.resumeProgressCSSValue}
          thirdHeader={props.language.resumeProgressBootstrap}
          thirdValue={props.language.resumeProgressBootstrapValue}
        />
      </div>
      <Spacer y={2} />
      <div className="col-lg-12 d-flex justify-content-center">
        <a href={props.language.resume} download>
          <Button
            color="success"
            size="xl"
            rounded
            ghost
            css={{ textAlign: 'center', zIndex: '0' }}>
            {props.language.downloadResume} <i className="fa-solid fa-download"></i>
          </Button>
        </a>
      </div>
      <Spacer y={3} />
    </div>
  );
}

Resume.propTypes = {
  language: PropTypes.object
};

export default Resume;
