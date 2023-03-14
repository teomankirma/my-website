import { Text } from '@nextui-org/react';
import PropTypes from 'prop-types';

function Footer(props) {
  return (
    <div className="footer">
      <Text className="footer-text" h5>
        {props.language.footer}
      </Text>
    </div>
  );
}

Footer.propTypes = {
  language: PropTypes.object
};

export default Footer;
