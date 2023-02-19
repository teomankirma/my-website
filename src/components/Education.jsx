import PageDivider from "./PageDivider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import firstSchool from "../images/first-school.jpeg";
import middleSchool from "../images/middle-school.jpeg";
import highSchool from "../images/high-school.jpeg";
import university from "../images/university.jpeg";

function Education(props) {
  return (
    <div id="education" className="education section">
      <PageDivider />
      <div className="row">
        <h1 className="education-text">{props.language.education}</h1>
        <div className="col-lg-12">
          <Carousel
            infiniteLoop={true}
            emulateTouch={true}
            showStatus={false}
            showThumbs={false}
            width={"70%"}
          >
            <div>
              <img src={firstSchool} alt="first school"></img>
              <p className="legend">{props.language.firstSchool}</p>
            </div>
            <div>
              <img src={middleSchool} alt="middle school"></img>
              <p className="legend">{props.language.middleSchool}</p>
            </div>
            <div>
              <img src={highSchool} alt="high school"></img>
              <p className="legend">{props.language.highSchool}</p>
            </div>
            <div>
              <img src={university} alt="university"></img>
              <p className="legend">{props.language.university}</p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Education;
