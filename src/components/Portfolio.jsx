import SectionHeader from './SectionHeader';
import { Spacer } from '@nextui-org/react';
import PortfolioCard from './PortfolioCard';
import atm from '../images/atm.png';
import blogWebsite from '../images/blog-website.png';
import keeper from '../images/keeper.png';
import myWebsite from '../images/my-website.png';
import weather from '../images/weather.png';

function Portfolio() {
  return (
    <div className="portfolio section" id="portfolio">
      <div className="row">
        <SectionHeader header="My Work" />
      </div>
      <Spacer y={3} />

      {/* Portfolio Cards */}
      <div className="row">
        <div className="col-lg-4">
          <PortfolioCard src={atm} alt="atm" />
          <Spacer y={1} />
        </div>
        <div className="col-lg-4">
          <PortfolioCard src={blogWebsite} alt="blog-website" />
          <Spacer y={1} />
        </div>
        <div className="col-lg-4">
          <PortfolioCard src={keeper} alt="keeper" />
          <Spacer y={1} />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <PortfolioCard src={myWebsite} alt="my-website" height={400} />
        </div>
        <div className="col-lg-6">
          <PortfolioCard src={weather} alt="weather" height={400} />
        </div>
      </div>
      <Spacer y={3} />
    </div>
  );
}

export default Portfolio;
