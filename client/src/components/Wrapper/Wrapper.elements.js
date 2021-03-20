import styled from "styled-components";
import { Container } from "../../globalStyles";

export const Wrap = styled.div`
  padding: 0.3em;
  color: papayawhip;
  height: 100vh;
  width: 100vw;
  background-color: #00642d;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-space-between;
`;

export const WrapContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 100%;
  box-shadow: 1px 1px 2px;
  ${Container};
`;
