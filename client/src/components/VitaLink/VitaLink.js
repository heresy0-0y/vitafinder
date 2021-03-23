import React from "react";

import { StyledLink, LinkContainer } from "./VitaLink.elements";

const VitaLink = (props) => {
  return (
    <>
      <LinkContainer>
        <StyledLink to={props.to}>
          {props.children}
        </StyledLink>
      </LinkContainer>
    </>
  );
};

export default VitaLink