import { Spacer, Text, Button } from '@nextui-org/react';
import PropTypes from 'prop-types';
import SectionHeader from './SectionHeader';

function KnowMeMore(props) {
  return (
    <div className="about-me section" id="aboutMe">
      <div className="row">
        <SectionHeader header={props.language.knowMeMore} />
      </div>
      <Spacer y={3} />
      <div className="row">
        <div className="col-lg-7">
          <div className="know-me-more">
            <Text h3>
              {props.language.whoAmIFirst}{' '}
              <span style={{ color: '#17c964' }}>{props.language.name}</span>,
              {props.language.whoAmISecond}.
            </Text>
            <Text size="$lg" weight="medium">
              {props.language.aboutMe}
            </Text>
            <Spacer y={1} />
            <Text size="$lg" weight="medium">
              {props.language.myExperiences}
            </Text>
          </div>
        </div>
        <div className="col-lg-5 know-me-more-li">
          <ul>
            <li>
              <Text weight="medium">
                <b className="li-b">{props.language.nameText}</b>
                {props.language.name}
              </Text>
              <hr className="li-hr" />
            </li>
            <li>
              <Text weight="medium">
                <b className="li-b">{props.language.emailText}</b>
                <a className="email-link" href="mailto: teomankirma@gmail.com">
                  {props.language.email}
                </a>
              </Text>
              <hr className="li-hr" />
            </li>
            <li>
              <Text weight="medium">
                <b className="li-b">{props.language.ageText}</b>
                {props.language.age}
              </Text>
              <hr className="li-hr" />
            </li>
            <li>
              <Text weight="medium">
                <b className="li-b">{props.language.fromText}</b>
                {props.language.from}
              </Text>
            </li>
            <Spacer y={1} />
            <li className="center-item">
              <a href={props.language.resume} download>
                <Button color="success" size="lg" rounded css={{ zIndex: '0' }}>
                  {props.language.downloadResume}
                </Button>
              </a>
            </li>
          </ul>
        </div>
        <div className="row experience-items">
          <div className="col-6">
            <Text h2>{props.language.experienceYear}</Text>
            <Text h6>{props.language.experienceText}</Text>
          </div>
          <div className="col-6">
            <Text h2>{props.language.projectsNumber}</Text>
            <Text h6>{props.language.projectsText}</Text>
          </div>
        </div>
      </div>
      <Spacer y={3} />
    </div>
  );
}

KnowMeMore.propTypes = {
  language: PropTypes.object
};

export default KnowMeMore;
