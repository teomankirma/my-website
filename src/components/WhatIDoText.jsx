import { Text } from '@nextui-org/react';
import PropTypes from 'prop-types';

function WhatIDoText(props) {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="what-i-do-text">
          <i className={props.image}></i>
        </div>
        <div className="what-i-do-text">
          <Text h5>{props.header}</Text>
          <Text>{props.headerText}</Text>
        </div>
      </div>
    </div>
  );
}

WhatIDoText.propTypes = {
  image: PropTypes.string,
  header: PropTypes.string,
  headerText: PropTypes.string
};

export default WhatIDoText;
