import HR from "./HR";
import { Text } from "@nextui-org/react";

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

export default SectionHeader;
