import image from "../images/photo.jpeg";

function AboutMe(props) {
  return (
    <div id="aboutMe" className="about-me">
      <div className="row align-items-center">
        <h1>{props.language.aboutMe}</h1>
        <div className="col-lg-6 justify-content-center">
          <img className="profile-pic" src={image} alt="logo"></img>
        </div>
        <div className="col-lg-6">
          <p>{props.language.aboutMeText}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
