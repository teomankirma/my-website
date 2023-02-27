import { Spacer } from "@nextui-org/react";
import SectionHeader from "./SectionHeader";
import TestimonialCarousel from "./TestimonialCarousel";

function Testimonial() {
  return (
    <div className="testimonial section" id="testimonial">
      <div className="row">
        <SectionHeader header="Client Speak" />
      </div>
      <Spacer y={3} />
      <TestimonialCarousel />
      <Spacer y={3} />
    </div>
  );
}

export default Testimonial;
