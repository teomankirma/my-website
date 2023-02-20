import PageDivider from "./PageDivider";
import css from "../images/css.png";
import html from "../images/html.png";
import js from "../images/js.png";
import mongodb from "../images/mongodb.png";
import npm from "../images/npm.png";
import react from "../images/react.png";

function MyExperiences(props) {
  return (
    <div className="my-experiences" id="myExperiences">
      <PageDivider />
      <div className="row mx-0">
        <h1>{props.language.myExperiences}</h1>
        <div className="col-lg-12">
          <table className="center">
            <tr>
              <td className="css-img">
                <img src={css} alt="css" className="square"></img>
              </td>
              <td className="html-img">
                <img src={html} alt="html" className="square"></img>
              </td>
            </tr>
            <tr>
              <td className="js-img">
                <img src={js} alt="js" className="square "></img>
              </td>
              <td className="react-img">
                <img src={react} alt="react" className="square"></img>
              </td>
            </tr>
            <tr>
              <td className="mongodb-img">
                <img src={mongodb} alt="mongodb" className="rectangle"></img>
              </td>
              <td className="npm-img">
                <img src={npm} alt="npm" className="rectangle"></img>
              </td>
            </tr>
          </table>
          <p>{props.language.myExperiencesText}</p>
        </div>
      </div>
    </div>
  );
}

export default MyExperiences;
