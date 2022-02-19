import { Menu, ChevronLeft } from "@styled-icons/material";
import { HeaderContainer, TitleContainer, IconContainer } from "./styles";

type HeaderProps = {
  isOpened: boolean,
  toggleDrawer: () => void,
};

const Header = ({ isOpened, toggleDrawer }: HeaderProps) => (
  <HeaderContainer>
    <IconContainer onClick={toggleDrawer}>
      {isOpened ? <ChevronLeft /> : <Menu />}
    </IconContainer>
    <TitleContainer>Header</TitleContainer>
  </HeaderContainer>
);

export default Header;