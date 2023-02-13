import image from "../images/photo.jpeg";

function AboutMe() {
  return (
    <div className="about-me section">
      <img className="profile-pic" src={image} alt="logo"></img>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sit amet mauris
        commodo quis imperdiet massa tincidunt nunc pulvinar. Odio ut enim
        blandit volutpat maecenas.
      </p>
    </div>
  );
}

export default AboutMe;
