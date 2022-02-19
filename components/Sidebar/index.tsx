import { MENU_ITEMS } from "../../constants/menu-items";
import MenuList from "../MenuList";
import { SidebarContainer } from "./styles";

type SidebarProps = {
  isOpened: boolean;
};

const Sidebar = ({ isOpened }: SidebarProps) => (
  <SidebarContainer isOpened={isOpened}>
    <MenuList options={MENU_ITEMS} />
  </SidebarContainer>
);

export default Sidebar;