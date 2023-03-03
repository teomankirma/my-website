import SectionHeader from './SectionHeader';
import { Spacer, Button } from '@nextui-org/react';
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

      {/* Button Groups */}
      <div className="row" id="buttonContainer">
        <div className="col-lg-12 d-flex justify-content-center">
          <Button.Group color="success" css={{ zIndex: '0' }}>
            <Button className="btn" ghost>
              All
            </Button>
            <Button className="btn" ghost>
              Design
            </Button>
            <Button className="btn" ghost>
              Brand
            </Button>
            <Button className="btn" ghost>
              Photos
            </Button>
          </Button.Group>
        </div>
      </div>
      <Spacer y={3} />

      {/* Portfolio Cards */}
      <div className="row">
        <div className="col-lg-4">
          <div className="filterDiv brand">
            <PortfolioCard src={atm} alt="atm" />
          </div>
          <Spacer y={1} />
          <div className="filterDiv brand">
            <PortfolioCard src={myWebsite} alt="my-website" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="filterDiv brand">
            <PortfolioCard src={blogWebsite} alt="blog-website" />
          </div>
          <Spacer y={1} />
          <div className="filterDiv brand">
            <PortfolioCard src={weather} alt="weather" height={280} />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="filterDiv brand">
            <PortfolioCard src={keeper} alt="keeper" />
          </div>
          <Spacer y={1} />
        </div>
      </div>
      <Spacer y={3} />
    </div>
  );
}

export default Portfolio;
