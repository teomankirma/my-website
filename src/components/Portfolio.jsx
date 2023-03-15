import SectionHeader from './SectionHeader';
import { Spacer } from '@nextui-org/react';
import { useContext } from 'react';
import { Context } from './App';
import PortfolioCard from './PortfolioCard';
import atm from '../images/atm.png';
import blogWebsite from '../images/blog-website.png';
import keeper from '../images/keeper.png';
import myWebsite from '../images/my-website.png';
import weather from '../images/weather.png';

function Portfolio() {
  const context = useContext(Context);

  return (
    <div className="portfolio section" id="portfolio">
      <div className="row">
        <SectionHeader header={context.language.myWork} />
      </div>
      <Spacer y={3} />

      {/* Portfolio Cards */}
      <div className="row">
        <div className="col-lg-4">
          <PortfolioCard
            src={atm}
            alt="atm"
            title={context.language.atmProjectTitle}
            projectInfo={context.language.atmProjectInfo}
            client={context.language.atmClient}
            technologies={context.language.atmTechnologies}
            industry={context.language.atmIndustry}
            date={context.language.atmDate}
          />
          <Spacer y={1} />
        </div>
        <div className="col-lg-4">
          <PortfolioCard
            src={blogWebsite}
            alt="blog-website"
            title={context.language.blogWebsiteProjectTitle}
            projectInfoText={context.language.projectInfoText}
            projectInfo={context.language.blogWebsiteProjectInfo}
            projectDetailsText={context.language.projectDetailsText}
            clientText={context.language.clientText}
            client={context.language.blogWebsiteClient}
            technologiesText={context.language.technologiesText}
            technologies={context.language.blogWebsiteTechnologies}
            industryText={context.language.industryText}
            industry={context.language.blogWebsiteIndustry}
            dateText={context.language.dateText}
            date={context.language.blogWebsiteDate}
          />
          <Spacer y={1} />
        </div>
        <div className="col-lg-4">
          <PortfolioCard
            src={keeper}
            alt="keeper"
            title={context.language.keeperProjectTitle}
            projectInfoText={context.language.projectInfoText}
            projectInfo={context.language.keeperProjectInfo}
            projectDetailsText={context.language.projectDetailsText}
            clientText={context.language.clientText}
            client={context.language.keeperClient}
            technologiesText={context.language.technologiesText}
            technologies={context.language.keeperTechnologies}
            industryText={context.language.industryText}
            industry={context.language.keeperIndustry}
            dateText={context.language.dateText}
            date={context.language.keeperDate}
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
            title={context.language.myWebsiteProjectTitle}
            projectInfoText={context.language.projectInfoText}
            projectInfo={context.language.myWebsiteProjectInfo}
            projectDetailsText={context.language.projectDetailsText}
            clientText={context.language.clientText}
            client={context.language.myWebsiteClient}
            technologiesText={context.language.technologiesText}
            technologies={context.language.myWebsiteTechnologies}
            industryText={context.language.industryText}
            industry={context.language.myWebsiteIndustry}
            dateText={context.language.dateText}
            date={context.language.myWebsiteDate}
          />
        </div>
        <div className="col-lg-6">
          <PortfolioCard
            src={weather}
            alt="weather"
            height={400}
            title={context.language.weatherProjectTitle}
            projectInfoText={context.language.projectInfoText}
            projectInfo={context.language.weatherProjectInfo}
            projectDetailsText={context.language.projectDetailsText}
            clientText={context.language.clientText}
            client={context.language.weatherClient}
            technologiesText={context.language.technologiesText}
            technologies={context.language.weatherTechnologies}
            industryText={context.language.industryText}
            industry={context.language.weatherIndustry}
            dateText={context.language.dateText}
            date={context.language.weatherDate}
            blogWebsite
          />
        </div>
      </div>
      <Spacer y={3} />
    </div>
  );
}

export default Portfolio;
