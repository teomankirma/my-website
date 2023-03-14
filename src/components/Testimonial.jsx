import { Spacer } from '@nextui-org/react';
import PropTypes from 'prop-types';
import SectionHeader from './SectionHeader';
import TestimonialCarousel from './TestimonialCarousel';

function Testimonial(props) {
  return (
    <div className="testimonial section" id="testimonial">
      <div className="row">
        <SectionHeader header={props.language.clientSpeak} />
      </div>
      <Spacer y={3} />
      <TestimonialCarousel
        // Client 1
        client1Name={props.language.client1Name}
        client1Tag={props.language.client1Tag}
        client1Comment={props.language.client1Comment}
        client1Stars={props.language.client1Stars}
        // Client 2
        client2Name={props.language.client2Name}
        client2Tag={props.language.client2Tag}
        client2Comment={props.language.client2Comment}
        client2Stars={props.language.client2Stars}
        // Client 3
        client3Name={props.language.client3Name}
        client3Tag={props.language.client3Tag}
        client3Comment={props.language.client3Comment}
        client3Stars={props.language.client3Stars}
        // Client 4
        client4Name={props.language.client4Name}
        client4Tag={props.language.client4Tag}
        client4Comment={props.language.client4Comment}
        client4Stars={props.language.client4Stars}
      />
      <Spacer y={3} />
    </div>
  );
}

Testimonial.propTypes = {
  language: PropTypes.object
};

export default Testimonial;
