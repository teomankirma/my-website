import PageDivider from "./PageDivider";
import hi from "../images/hi.gif";

function ContactMe() {
  return (
    <div className="contact-me section">
      <PageDivider />
      <h1>Contact Me</h1>
      <img src={hi} alt="hi"></img>
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
            <a href="mailto:teomankirma@gmail.com">Email</a>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default ContactMe;
