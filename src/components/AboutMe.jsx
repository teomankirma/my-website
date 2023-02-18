import image from "../images/photo.jpeg";

function AboutMe() {
  return (
    <div id="aboutMe" className="about-me section">
      <div className="row align-items-center">
        <h1>About Me</h1>
        <div className="col-lg-6 justify-content-center">
          <img className="profile-pic" src={image} alt="logo"></img>
        </div>
        <div className="col-lg-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
            mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Odio ut
            enim blandit volutpat maecenas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
