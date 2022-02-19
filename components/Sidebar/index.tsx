import { SidebarContainer, SidebarText } from "./styles";

type SidebarProps = {
  isOpened: boolean;
};

const Sidebar = ({ isOpened }: SidebarProps) => (
  <SidebarContainer isOpened={isOpened}>
    <SidebarText>Menu</SidebarText>
  </SidebarContainer>
);

export default Sidebar;