import styled from 'styled-components';

type SidebarContainerProps = {
  isOpened: boolean;
};

export const SidebarContainer = styled.aside<SidebarContainerProps>`
display: flex;
flex-direction: column;
width: ${(props) => (props.isOpened ? "100vw" : "0" )};
background-color: #00022e;
transition: width 0.3s;
overflow: hidden;

@media (min-width: 768px) {
  width: ${(props) => (props.isOpened ? "20vw" : "50px" )};
} 
`;
