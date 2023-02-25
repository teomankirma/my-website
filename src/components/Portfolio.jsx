import SectionHeader from "./SectionHeader";
import { Spacer, Button } from "@nextui-org/react";
import PortfolioCard from "./PortfolioCard";
import project1 from "../images/project1.jpeg";
import project2 from "../images/project2.jpeg";
import project3 from "../images/project3.jpeg";
import project4 from "../images/project4.jpeg";
import project5 from "../images/project5.jpeg";
import project6 from "../images/project6.jpeg";
import project7 from "../images/project7.jpeg";

function Portfolio() {
  return (
    <div className="portfolio section">
      <div className="row">
        <SectionHeader header="My Work" />
      </div>
      <Spacer y={3} />

      {/* Button Groups */}
      <div className="row" id="buttonContainer">
        <div className="col-lg-12 d-flex justify-content-center">
          <Button.Group color="success">
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
      <div className="row container">
        <div className="col-lg-4">
          <div className="filterDiv brand">
            <PortfolioCard src={project1} height={340} alt="project 1" />
          </div>
          <Spacer y={1} />
          <div className="filterDiv brand photos">
            <PortfolioCard src={project4} height={700} alt="project 4" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="filterDiv design">
            <PortfolioCard src={project2} height={700} alt="project 2" />
          </div>
          <Spacer y={1} />
          <div className="filterDiv design photos">
            <PortfolioCard src={project7} height={500} alt="project 7" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="filterDiv photos">
            <PortfolioCard src={project3} height={250} alt="project 3" />
          </div>
          <Spacer y={1} />
          <div className="filterDiv design">
            <PortfolioCard src={project5} height={340} alt="project 5" />
          </div>
          <Spacer y={1} />
          <div className="filterDiv brand">
            <PortfolioCard src={project6} height={400} alt="project 6" />
          </div>
        </div>
      </div>
      <Spacer y={3} />
    </div>
  );
}

export default Portfolio;
