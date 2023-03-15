import SectionHeader from './SectionHeader';
import WhatIDoText from './WhatIDoText';
import { Spacer } from '@nextui-org/react';
import { useContext } from 'react';
import { Context } from './App';

function WhatIDo() {
  const context = useContext(Context);

  return (
    <div className="what-i-do section" id="whatIDo">
      <div className="row">
        <SectionHeader header={context.language.whatIDo} />
      </div>
      <Spacer y={5} />
      <WhatIDoText
        image="fa-solid fa-desktop"
        header={context.language.whatIDoName}
        headerText={context.language.whatIDoText}
      />
      <Spacer y={3} />
    </div>
  );
}

export default WhatIDo;
