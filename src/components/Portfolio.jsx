import SectionHeader from './SectionHeader';
import { Spacer } from '@nextui-org/react';
import PortfolioCard from './PortfolioCard';
import MyWorkData from '../MyWorkData';
import PortfolioButtons from './PortfolioButtons';

import { useState } from 'react';

function Portfolio() {
  const [item, setItem] = useState(MyWorkData);
  const menuItems = [...new Set(MyWorkData.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = MyWorkData.filter((newVal) => {
      return newVal.category === curcat;
      // comparing category for displaying data
    });
    setItem(newItem);
  };

  return (
    <div className="portfolio section" id="portfolio">
      <div className="row">
        <SectionHeader header="My Work" />
      </div>
      <Spacer y={3} />

      <PortfolioButtons filterItem={filterItem} setItem={setItem} menuItems={menuItems} />
      <Spacer y={3} />

      <div className="container-fluid">
        <div className="row">
          <PortfolioCard item={item} />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
