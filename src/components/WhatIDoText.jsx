import { Text } from "@nextui-org/react";

function WhatIDoText(props) {
  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="what-i-do-text">
          <i className={props.leftImage}></i>
        </div>
        <div className="what-i-do-text">
          <Text h5>{props.headerLeft}</Text>
          <Text>{props.headerLeftText}</Text>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="what-i-do-text">
          <i className={props.rightImage}></i>
        </div>
        <div className="what-i-do-text">
          <Text h5>{props.headerRight}</Text>
          <Text>{props.headerRightText}</Text>
        </div>
      </div>
    </div>
  );
}

export default WhatIDoText;
