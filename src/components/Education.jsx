import PageDivider from "./PageDivider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import firstSchool from "../images/first-school.jpeg";
import middleSchool from "../images/middle-school.jpeg";
import highSchool from "../images/high-school.jpeg";
import university from "../images/university.jpeg";

function Education() {
  return (
    <div className="education section">
      <PageDivider />
      <div className="row">
        <div className="col-lg-12">
          <h1 className="education-text">Education</h1>
          <Carousel
            infiniteLoop={true}
            emulateTouch={true}
            showStatus={false}
            showThumbs={false}
            width={"70%"}
          >
            <div>
              <img src={firstSchool} alt="first school"></img>
              <p className="legend">Abdi Ibrahim First School</p>
            </div>
            <div>
              <img src={middleSchool} alt="middle school"></img>
              <p className="legend">Istanbul Academy College Middle School</p>
            </div>
            <div>
              <img src={highSchool} alt="high school"></img>
              <p className="legend">Emlakbank Suleyman Demirel High School</p>
            </div>
            <div>
              <img src={university} alt="university"></img>
              <p className="legend">Nisantasi University 3/4</p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Education;
