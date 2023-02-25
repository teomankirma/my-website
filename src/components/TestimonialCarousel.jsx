import { Card, Text, Avatar } from "@nextui-org/react";
import TestimonialCarouselCard from "./TestimonialCarouselCard";
import client1 from "../images/client1.jpeg";
import client2 from "../images/client2.jpeg";
import client3 from "../images/client3.jpeg";
import client4 from "../images/client4.jpeg";

function TestimonialCarousel() {
  return (
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <TestimonialCarouselCard
            image={client1}
            name="Jay Shah"
            who="Founder at Icomatic Pvt Ltd"
            comment="Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure."
          />
        </div>
        <div class="carousel-item">
          <TestimonialCarouselCard
            image={client2}
            name="Patrick Cary"
            who="Freelancer from USA"
            comment="I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure."
          />
        </div>
        <div class="carousel-item">
          {" "}
          <TestimonialCarouselCard
            image={client3}
            name="Chris Tom"
            who="User from UK"
            comment="I have used them twice now. Good rates, very efficient service and priced simply dummy text of the printing and typesetting industry quidam interesset his et. Excellent."
          />
        </div>
        <div class="carousel-item">
          <TestimonialCarouselCard
            image={client4}
            name="Dennis Jacques"
            who="User from USA"
            comment="Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span>
          <i class="fa fa-angle-left" aria-hidden="true"></i>
        </span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span>
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default TestimonialCarousel;
