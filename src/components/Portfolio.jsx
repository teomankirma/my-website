import SectionHeader from './SectionHeader';
import { Spacer } from '@nextui-org/react';
import PropTypes from 'prop-types';
import PortfolioCard from './PortfolioCard';
import atm from '../images/atm.png';
import blogWebsite from '../images/blog-website.png';
import keeper from '../images/keeper.png';
import myWebsite from '../images/my-website.png';
import weather from '../images/weather.png';

function Portfolio(props) {
  return (
    <div className="portfolio section" id="portfolio">
      <div className="row">
        <SectionHeader header={props.language.myWork} />
      </div>
      <Spacer y={3} />

      {/* Portfolio Cards */}
      <div className="row">
        <div className="col-lg-4">
          <PortfolioCard
            src={atm}
            alt="atm"
            title={props.language.atmProjectTitle}
            projectInfoText={props.language.projectInfoText}
            projectInfo={props.language.atmProjectInfo}
            projectDetailsText={props.language.projectDetailsText}
            clientText={props.language.clientText}
            client={props.language.atmClient}
            technologiesText={props.language.technologiesText}
            technologies={props.language.atmTechnologies}
            industryText={props.language.industryText}
            industry={props.language.atmIndustry}
            dateText={props.language.dateText}
            date={props.language.atmDate}
          />
          <Spacer y={1} />
        </div>
        <div className="col-lg-4">
          <PortfolioCard
            src={blogWebsite}
            alt="blog-website"
            title={props.language.blogWebsiteProjectTitle}
            projectInfoText={props.language.projectInfoText}
            projectInfo={props.language.blogWebsiteProjectInfo}
            projectDetailsText={props.language.projectDetailsText}
            clientText={props.language.clientText}
            client={props.language.blogWebsiteClient}
            technologiesText={props.language.technologiesText}
            technologies={props.language.blogWebsiteTechnologies}
            industryText={props.language.industryText}
            industry={props.language.blogWebsiteIndustry}
            dateText={props.language.dateText}
            date={props.language.blogWebsiteDate}
          />
          <Spacer y={1} />
        </div>
        <div className="col-lg-4">
          <PortfolioCard
            src={keeper}
            alt="keeper"
            title={props.language.keeperProjectTitle}
            projectInfoText={props.language.projectInfoText}
            projectInfo={props.language.keeperProjectInfo}
            projectDetailsText={props.language.projectDetailsText}
            clientText={props.language.clientText}
            client={props.language.keeperClient}
            technologiesText={props.language.technologiesText}
            technologies={props.language.keeperTechnologies}
            industryText={props.language.industryText}
            industry={props.language.keeperIndustry}
            dateText={props.language.dateText}
            date={props.language.keeperDate}
          />
          <Spacer y={1} />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <PortfolioCard
            src={myWebsite}
            alt="my-website"
            height={400}
            title={props.language.myWebsiteProjectTitle}
            projectInfoText={props.language.projectInfoText}
            projectInfo={props.language.myWebsiteProjectInfo}
            projectDetailsText={props.language.projectDetailsText}
            clientText={props.language.clientText}
            client={props.language.myWebsiteClient}
            technologiesText={props.language.technologiesText}
            technologies={props.language.myWebsiteTechnologies}
            industryText={props.language.industryText}
            industry={props.language.myWebsiteIndustry}
            dateText={props.language.dateText}
            date={props.language.myWebsiteDate}
          />
        </div>
        <div className="col-lg-6">
          <PortfolioCard
            src={weather}
            alt="weather"
            height={400}
            title={props.language.weatherProjectTitle}
            projectInfoText={props.language.projectInfoText}
            projectInfo={props.language.weatherProjectInfo}
            projectDetailsText={props.language.projectDetailsText}
            clientText={props.language.clientText}
            client={props.language.weatherClient}
            technologiesText={props.language.technologiesText}
            technologies={props.language.weatherTechnologies}
            industryText={props.language.industryText}
            industry={props.language.weatherIndustry}
            dateText={props.language.dateText}
            date={props.language.weatherDate}
            blogWebsite
          />
        </div>
      </div>
      <Spacer y={3} />
    </div>
  );
}
Portfolio.propTypes = {
  language: PropTypes.object
};

export default Portfolio;
