import { MenuItem as MenuItemType } from '../../constants/menu-items';
import MenuItem from '../MenuItem';

type MenuListProps = {
  options: MenuItemType[],
};

const MenuList = ({ options }: MenuListProps) => (
  <>
    {options.map((option) => (
      <MenuItem menuItem={option} key={option.id} />
    ))}
  </>
);

export default MenuList;