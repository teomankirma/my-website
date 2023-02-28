import { Spacer, Text, Button } from '@nextui-org/react';
import SectionHeader from './SectionHeader';

function KnowMeMore() {
  return (
    <div className="about-me section" id="aboutMe">
      <div className="row">
        <SectionHeader header="Know Me More" />
      </div>
      <Spacer y={3} />
      <div className="row">
        <div className="col-lg-7">
          <div className="know-me-more">
            <Text h3>I&apos;m Teoman Kirma, a Frontend Developer.</Text>
            <Text size="$lg" weight="medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Spacer y={1} />
            <Text size="$lg" weight="medium">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </Text>
          </div>
        </div>
        <div className="col-lg-5 know-me-more-li">
          <ul>
            <li>
              <Text weight="medium">
                <b className="li-b">Name:</b>Teoman Kirma
              </Text>
              <hr className="li-hr" />
            </li>
            <li>
              <Text weight="medium">
                <b className="li-b">Email:</b>
                <a className="li-a" href="mailto: teomankirma@gmail.com">
                  teomankirma@gmail.com
                </a>
              </Text>
              <hr className="li-hr" />
            </li>
            <li>
              <Text weight="medium">
                <b className="li-b">Age:</b>20
              </Text>
              <hr className="li-hr" />
            </li>
            <li>
              <Text weight="medium">
                <b className="li-b">From:</b>Izmir, Turkiye
              </Text>
            </li>
            <Spacer y={1} />
            <li>
              {' '}
              <Button color="success" size="lg" rounded css={{ textAlign: 'center' }}>
                Download CV
              </Button>
            </li>
          </ul>
        </div>
        <div className="row asdasdasd">
          <div className="col-6">
            <Text h2 css={{ color: '#697177' }}>
              3+
            </Text>
            <Text h6 css={{ color: '#697177' }}>
              Years Experience
            </Text>
          </div>
          <div className="col-6">
            <Text h2 css={{ color: '#697177' }}>
              30+
            </Text>
            <Text h6 css={{ color: '#697177' }}>
              Projects Done
            </Text>
          </div>
        </div>
      </div>
      <Spacer y={3} />
    </div>
  );
}

export default KnowMeMore;
