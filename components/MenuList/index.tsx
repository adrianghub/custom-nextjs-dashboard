import { MenuItem as MenuItemType } from '../../constants/menu-items';
import MenuItem from '../MenuItem';
import { MenuListContainer } from './styles';

type MenuListProps = {
  options: MenuItemType[],
};

const MenuList = ({ options }: MenuListProps) => (
  <MenuListContainer>
    {options.map((option) => (
      <MenuItem menuItem={option} key={option.id} />
    ))}
  </MenuListContainer>
);

export default MenuList;