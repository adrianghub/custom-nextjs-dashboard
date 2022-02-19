import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { MenuItem as MenuItemType } from '../../constants/menu-items';
import ExpandIcon from '../ExpandIcon';
import MenuList from '../MenuList';
import { MenuItemContainer } from './styles';

type MenuItemProps = {
  menuItem: MenuItemType
};

const MenuItem = ({ menuItem: { name, icon: Icon, url, depth, subItems } }: MenuItemProps) => {
  
  const [isExpanded, toggleExpanded] = useState(false);
  const router = useRouter();
  const selected = router.asPath === url;
  const isNested = subItems;

  const onClick = () => toggleExpanded(prev => !prev);

  return (
    <>
      <MenuItemContainer className={selected ? "selected" : ""} depth={depth}>
        <Link href={url} passHref>
          <div className="menu-item">
            <Icon />
            <span>{name}</span>
          </div>
        </Link>
        {isNested ? (
          <ExpandIcon isExpanded={isExpanded} handleClick={onClick}/>
        ) : null}
      </MenuItemContainer>
      {isExpanded && isNested ? <MenuList options={subItems}/> : null}
    </>
  )
};

export default MenuItem;