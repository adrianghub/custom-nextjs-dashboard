import styled from 'styled-components';

type SidebarContainerProps = {
  isOpened: boolean;
};

export const SidebarContainer = styled.aside<SidebarContainerProps>`
display: flex;
flex-direction: column;
width: ${(props) => (props.isOpened ? "20vw" : "0vw" )};
background-color: #00022e;
transition: width: 0.5s;
overflow: hidden;
`;
