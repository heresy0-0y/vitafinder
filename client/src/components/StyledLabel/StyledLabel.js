import React from "react";
import { Label, LabelContainer } from "./StyledLabel.elements";

const StyledLabel = (props) => {
  return (
    <>
      <Label>
        {props.children}
      </Label>
    </>
  );
};

export default StyledLabel;
