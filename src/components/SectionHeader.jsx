import HR from './HR';
import { Text } from '@nextui-org/react';
import PropTypes from 'prop-types';

function SectionHeader(props) {
  return (
    <div className="col-lg-12 section-header">
      <Text h1 weight="medium">
        {props.header}
      </Text>
      <HR />
    </div>
  );
}

SectionHeader.propTypes = {
  header: PropTypes.string
};

export default SectionHeader;
