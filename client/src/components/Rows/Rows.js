import React from "react";
import { RowDiv } from "./Rows.elements";

const Rows = (props) => {
  return (
    <>
      <RowDiv>
        {props.children}
      </RowDiv>
    </>
  );
};

export default Rows;
