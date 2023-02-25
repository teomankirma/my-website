import SectionHeader from "./SectionHeader";
import WhatIDoText from "./WhatIDoText";

function WhatIDo() {
  return (
    <div className="what-i-do section">
      <div className="row">
        <SectionHeader header="What I Do?" />
      </div>
      <WhatIDoText
        leftImage="fa-solid fa-palette"
        headerLeft="Graphic Design"
        headerLeftText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        rightImage="fa-solid fa-desktop"
        headerRight="Web Design"
        headerRightText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <WhatIDoText
        leftImage="fa-solid fa-pen-ruler"
        headerLeft="UI/UX Design"
        headerLeftText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        rightImage="fa-solid fa-paintbrush"
        headerRight="App Design & Develop"
        headerRightText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <WhatIDoText
        leftImage="fa-solid fa-chart-area"
        headerLeft="Business Analysis"
        headerLeftText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        rightImage="fa-solid fa-bullhorn"
        headerRight="SEO Marketing"
        headerRightText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
    </div>
  );
}

export default WhatIDo;