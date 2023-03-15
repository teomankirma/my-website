import { Spacer } from '@nextui-org/react';
import { useContext } from 'react';
import { Context } from './App';
import SectionHeader from './SectionHeader';
import TestimonialCarousel from './TestimonialCarousel';

function Testimonial() {
  const context = useContext(Context);

  return (
    <div className="testimonial section" id="testimonial">
      <div className="row">
        <SectionHeader header={context.language.clientSpeak} />
      </div>
      <Spacer y={3} />
      <TestimonialCarousel />
      <Spacer y={3} />
    </div>
  );
}

export default Testimonial;
