import TestimonialCarouselCard from './TestimonialCarouselCard';
import PropTypes from 'prop-types';
import client1 from '../images/client1.jpeg';
import client2 from '../images/client2.jpeg';
import client3 from '../images/client3.jpeg';
import client4 from '../images/client4.jpeg';

function TestimonialCarousel(props) {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <TestimonialCarouselCard
            image={client1}
            name={props.client1Name}
            who={props.client1Tag}
            comment={props.client1Comment}
            stars={props.client1Stars}
          />
        </div>
        <div className="carousel-item">
          <TestimonialCarouselCard
            image={client2}
            name={props.client2Name}
            who={props.client2Tag}
            comment={props.client2Comment}
            stars={props.client2Stars}
          />
        </div>
        <div className="carousel-item">
          <TestimonialCarouselCard
            image={client3}
            name={props.client3Name}
            who={props.client3Tag}
            comment={props.client3Comment}
            stars={props.client3Stars}
          />
        </div>
        <div className="carousel-item">
          <TestimonialCarouselCard
            image={client4}
            name={props.client4Name}
            who={props.client4Tag}
            comment={props.client4Comment}
            stars={props.client4Stars}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span aria-hidden="true">
          <i className="fa fa-angle-left"></i>
        </span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span aria-hidden="true">
          <i className="fa fa-angle-right"></i>
        </span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

TestimonialCarousel.propTypes = {
  client1Name: PropTypes.string,
  client2Name: PropTypes.string,
  client3Name: PropTypes.string,
  client4Name: PropTypes.string,
  client1Tag: PropTypes.string,
  client2Tag: PropTypes.string,
  client3Tag: PropTypes.string,
  client4Tag: PropTypes.string,
  client1Comment: PropTypes.string,
  client2Comment: PropTypes.string,
  client3Comment: PropTypes.string,
  client4Comment: PropTypes.string,
  client1Stars: PropTypes.string,
  client2Stars: PropTypes.string,
  client3Stars: PropTypes.string,
  client4Stars: PropTypes.string
};

export default TestimonialCarousel;
