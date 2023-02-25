import { Spacer, Card, Text } from "@nextui-org/react";
import SectionHeader from "./SectionHeader";
import TestimonialCarousel from "./TestimonialCarousel";

function Testimonial() {
  return (
    <div className="testimonial section">
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
