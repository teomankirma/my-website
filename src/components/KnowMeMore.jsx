import { Spacer, Text, Button } from '@nextui-org/react';
import { useContext } from 'react';
import { Context } from './App';
import SectionHeader from './SectionHeader';

function KnowMeMore() {
  const context = useContext(Context);

  return (
    <div className="about-me section" id="aboutMe">
      <div className="row">
        <SectionHeader header={context.language.knowMeMore} />
      </div>
      <Spacer y={3} />
      <div className="row">
        <div className="col-lg-7">
          <div className="know-me-more">
            <Text h3>
              {context.language.whoAmIFirst}{' '}
              <span style={{ color: '#17c964' }}>{context.language.name}</span>,
              {context.language.whoAmISecond}.
            </Text>
            <Text size="$lg" weight="medium">
              {context.language.aboutMe}
            </Text>
            <Spacer y={1} />
            <Text size="$lg" weight="medium">
              {context.language.myExperiences}
            </Text>
          </div>
        </div>
        <div className="col-lg-5 know-me-more-li">
          <ul>
            <li>
              <Text weight="medium">
                <b className="li-b">{context.language.nameText}</b>
                {context.language.name}
              </Text>
              <hr className="li-hr" />
            </li>
            <li>
              <Text weight="medium">
                <b className="li-b">{context.language.emailText}</b>
                <a className="email-link" href="mailto: teomankirma@gmail.com">
                  {context.language.email}
                </a>
              </Text>
              <hr className="li-hr" />
            </li>
            <li>
              <Text weight="medium">
                <b className="li-b">{context.language.ageText}</b>
                {context.language.age}
              </Text>
              <hr className="li-hr" />
            </li>
            <li>
              <Text weight="medium">
                <b className="li-b">{context.language.fromText}</b>
                {context.language.from}
              </Text>
            </li>
            <Spacer y={1} />
            <li className="center-item">
              <a href={context.language.resume} download>
                <Button color="success" size="lg" rounded css={{ zIndex: '0' }}>
                  {context.language.downloadResume}
                </Button>
              </a>
            </li>
          </ul>
        </div>
        <div className="row experience-items">
          <div className="col-6">
            <Text h2>{context.language.experienceYear}</Text>
            <Text h6>{context.language.experienceText}</Text>
          </div>
          <div className="col-6">
            <Text h2>{context.language.projectsNumber}</Text>
            <Text h6>{context.language.projectsText}</Text>
          </div>
        </div>
      </div>
      <Spacer y={3} />
    </div>
  );
}

export default KnowMeMore;
