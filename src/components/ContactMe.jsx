import PageDivider from "./PageDivider";
import hi from "../images/hi.gif";

function ContactMe() {
  return (
    <div className="contact-me section">
      <PageDivider />
      <div className="row">
        <div className="col-lg-12">
          {" "}
          <h1>Contact Me</h1>
        </div>
        <div className="col-lg-12">
          <img src={hi} alt="hi"></img>
        </div>
        <div className="col-lg-12">
          <table className="center">
            <tr>
              <td>
                <a href="https://www.linkedin.com/in/teoman-k%C4%B1rma-14ba31238/">
                  LinkedIn
                </a>
              </td>
              <td>
                <a href="https://twitter.com/teomankirma">Twitter</a>
              </td>
              <td>
                <a href="https://github.com/teomankirma">Github</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
