import styled, { keyframes } from "styled-components";

const fadein = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const MenuListContainer = styled.div`
  animation: ${fadein} .5s linear;
`;