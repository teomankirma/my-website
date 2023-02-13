import PageDivider from "./PageDivider";
import css from "../images/css.png";
import html from "../images/html.png";
import js from "../images/js.png";
import mongodb from "../images/mongodb.png";
import npm from "../images/npm.png";
import react from "../images/react.png";

function MyExperiences() {
  return (
    <div className="my-experiences section">
      <PageDivider />
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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}

export default MyExperiences;
