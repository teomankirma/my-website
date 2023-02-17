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
                  <i class="fa-brands fa-linkedin fa-bounce"></i>
                </a>
              </td>
              <td>
                <a href="https://twitter.com/teomankirma">
                  <i class="fa-brands fa-twitter fa-bounce"></i>
                </a>
              </td>
              <td>
                <a href="https://github.com/teomankirma">
                  <i class="fa-brands fa-github fa-bounce"></i>
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
