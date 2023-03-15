import { Text } from '@nextui-org/react';
import { useContext } from 'react';
import { Context } from './App';

function Footer() {
  const context = useContext(Context);

  return (
    <div className="footer">
      <Text className="footer-text" h5>
        {context.language.footer}
      </Text>
    </div>
  );
}

export default Footer;
