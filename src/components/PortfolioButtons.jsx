import { Button } from '@nextui-org/react';
import MyWorkData from '../MyWorkData';
import PropTypes from 'prop-types';

function PortfolioButtons({ filterItem, setItem, menuItems }) {
  return (
    <div className="col-lg-12 d-flex justify-content-center">
      <Button.Group color="success" css={{ zIndex: '0' }} ghost>
        <Button onClick={() => setItem(MyWorkData)}>All</Button>
        {menuItems.map((Val, id) => {
          return (
            <Button key={id} onClick={() => filterItem(Val)}>
              {Val}
            </Button>
          );
        })}
      </Button.Group>
    </div>
  );
}

PortfolioButtons.propTypes = {
  filterItem: PropTypes.function,
  setItem: PropTypes.function,
  menuItems: PropTypes.array
};

export default PortfolioButtons;
