import SectionHeader from './SectionHeader';
import WhatIDoText from './WhatIDoText';
import { Spacer } from '@nextui-org/react';
import PropTypes from 'prop-types';

function WhatIDo(props) {
  return (
    <div className="what-i-do section" id="whatIDo">
      <div className="row">
        <SectionHeader header={props.language.whatIDo} />
      </div>
      <Spacer y={5} />
      <WhatIDoText
        image="fa-solid fa-desktop"
        header={props.language.whatIDoName}
        headerText={props.language.whatIDoText}
      />
      <Spacer y={3} />
    </div>
  );
}

WhatIDo.propTypes = {
  language: PropTypes.object
};

export default WhatIDo;
