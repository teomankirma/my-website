import image from "../images/photo.jpeg";

function AboutMe() {
  return (
    <div className="about-me section">
      <div className="row">
        <div className="col-lg-6">
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
