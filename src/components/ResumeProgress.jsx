import { Progress, Spacer, Text } from '@nextui-org/react';
import PropTypes from 'prop-types';

function ResumeProgress(props) {
  return (
    <div className="col-lg-6">
      <Spacer y={1} />
      <Text h5 css={{ textAlign: 'left' }}>
        {props.firstHeader}
        <span className="float-end">{props.firstValue}%</span>
      </Text>
      <Progress color="success" value={props.firstValue} size="sm" />
      <Spacer y={1} />
      <Text h5 css={{ textAlign: 'left' }}>
        {props.secondHeader}
        <span className="float-end">{props.secondValue}%</span>
      </Text>
      <Progress color="success" value={props.secondValue} size="sm" />
      <Spacer y={1} />
      <Text h5 css={{ textAlign: 'left' }}>
        {props.thirdHeader}
        <span className="float-end">{props.thirdValue}%</span>
      </Text>
      <Progress color="success" value={props.thirdValue} size="sm" />
    </div>
  );
}

ResumeProgress.propTypes = {
  firstHeader: PropTypes.string,
  firstValue: PropTypes.number,
  secondHeader: PropTypes.string,
  secondValue: PropTypes.number,
  thirdHeader: PropTypes.string,
  thirdValue: PropTypes.number
};

export default ResumeProgress;
