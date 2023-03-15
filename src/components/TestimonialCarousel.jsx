import TestimonialCarouselCard from './TestimonialCarouselCard';
import { useContext } from 'react';
import { Context } from './App';
import client1 from '../images/client1.jpeg';
import client2 from '../images/client2.jpeg';
import client3 from '../images/client3.jpeg';
import client4 from '../images/client4.jpeg';

function TestimonialCarousel() {
  const context = useContext(Context);

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
            name={context.language.client1Name}
            who={context.language.client1Tag}
            comment={context.language.client1Comment}
            stars={context.language.client1Stars}
          />
        </div>
        <div className="carousel-item">
          <TestimonialCarouselCard
            image={client2}
            name={context.language.client2Name}
            who={context.language.client2Tag}
            comment={context.language.client2Comment}
            stars={context.language.client2Stars}
          />
        </div>
        <div className="carousel-item">
          <TestimonialCarouselCard
            image={client3}
            name={context.language.client3Name}
            who={context.language.client3Tag}
            comment={context.language.client3Comment}
            stars={context.language.client3Stars}
          />
        </div>
        <div className="carousel-item">
          <TestimonialCarouselCard
            image={client4}
            name={context.language.client4Name}
            who={context.language.client4Tag}
            comment={context.language.client4Comment}
            stars={context.language.client4Stars}
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

export default TestimonialCarousel;
