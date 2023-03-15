import SectionHeader from './SectionHeader';
import { Text, Spacer, Button } from '@nextui-org/react';
import { useContext } from 'react';
import { Context } from './App';
import ResumeCard from './ResumeCard';
import ResumeProgress from './ResumeProgress';

function Resume() {
  const context = useContext(Context);

  return (
    <div className="resume section" id="resume">
      <div className="row">
        <SectionHeader header={context.language.resumeHeader} />
      </div>
      <Spacer y={3} />
      <div className="row">
        <div className="my-education col-lg-6">
          <Text h3 css={{ textAlign: 'left' }}>
            {context.language.myEducation}
          </Text>
          <Spacer y={2} />
          <ResumeCard
            badge={context.language.primarySchoolBadge}
            cardHeader={context.language.primarySchool}
            cardText={context.language.primarySchoolText}
          />
          <ResumeCard
            badge={context.language.middleSchoolBadge}
            cardHeader={context.language.middleSchool}
            cardText={context.language.middleSchoolText}
          />
          <ResumeCard
            badge={context.language.highSchoolBadge}
            cardHeader={context.language.highSchool}
            cardText={context.language.highSchoolText}
          />
          <ResumeCard
            badge={context.language.universityBadge}
            cardHeader={context.language.university}
            cardText={context.language.universityText}
          />
          <Spacer y={1} />
        </div>
        <div className="my-experience col-lg-6">
          <Text h3 css={{ textAlign: 'left' }}>
            {context.language.myExperience}
          </Text>
          <Spacer y={2} />
          <ResumeCard
            badge={context.language.myExperienceBadge}
            cardHeader={context.language.myExperienceName}
            cardText={context.language.myExperienceText}
          />
        </div>
      </div>
      <Spacer y={4} />
      <div className="row">
        <Text h3 css={{ textAlign: 'left' }}>
          {context.language.mySkills}
        </Text>
        <ResumeProgress
          firstHeader={context.language.resumeProgressWebDesign}
          firstValue={context.language.resumeProgressWebDesignValue}
          secondHeader={context.language.resumeProgressJavaScript}
          secondValue={context.language.resumeProgressJavaScriptValue}
          thirdHeader={context.language.resumeProgressReactJS}
          thirdValue={context.language.resumeProgressReactJSValue}
        />
        <ResumeProgress
          firstHeader={context.language.resumeProgressHTML}
          firstValue={context.language.resumeProgressHTMLValue}
          secondHeader={context.language.resumeProgressCSS}
          secondValue={context.language.resumeProgressCSSValue}
          thirdHeader={context.language.resumeProgressBootstrap}
          thirdValue={context.language.resumeProgressBootstrapValue}
        />
      </div>
      <Spacer y={2} />
      <div className="col-lg-12 d-flex justify-content-center">
        <a href={context.language.resume} download>
          <Button
            color="success"
            size="xl"
            rounded
            ghost
            css={{ textAlign: 'center', zIndex: '0' }}>
            {context.language.downloadResume} <i className="fa-solid fa-download"></i>
          </Button>
        </a>
      </div>
      <Spacer y={3} />
    </div>
  );
}

export default Resume;
