import {
  Dashboard,
  ShoppingCart,
  People,
  AttachMoney,
  AddShoppingCart,
  Done,
  Business,
  HomeWork,
  Person,
} from "@styled-icons/material";

type MenuOption = {
  name: string,
  icon: React.ComponentType,
  url: string,
  subItems?: MenuOption[],
};

export type MenuItem = {
  name: string,
  icon: React.ComponentType,
  url: string,
  id: string,
  depth: number,
  subItems?: MenuItem[],
};

const MENU_OPTIONS: MenuOption[] = [
  {
    name: "Dashboard",
    icon: Dashboard,
    url: "/",
  },
  {
    name: "Orders",
    icon: ShoppingCart,
    url: "/orders",
    subItems: [
      {
        name: "New",
        icon: AddShoppingCart,
        url: "/new-order",
      },
      {
        name: "Completed",
        icon: Done,
        url: "/completed-orders",
      },
    ],
  },
  {
    name: "Customers",
    icon: People,
    url: "/customers",
    subItems: [
      {
        name: "Corporate",
        icon: Business,
        url: "/corporate",
      },
      {
        name: "SMB",
        icon: HomeWork,
        url: "/smb",
        subItems: [
          {
            name: "Retail",
            icon: Person,
            url: "/retail",
          },
        ],
      },
    ],
  },
  {
    name: "Inventory",
    icon: AttachMoney,
    url: "/inventory",
  },
];

const generateMenu = (options: MenuOption[], depth = 0): MenuItem[] => {
  return (
    options.map((option, idx) => ({
    ...option,
    id: depth === 0 ? idx.toString() : `${depth}.${idx}`,
    depth,
    subItems:
      option.subItems && generateMenu(option.subItems, depth + 1)
    }))
  )
};

export const MENU_ITEMS: MenuItem[] = generateMenu(MENU_OPTIONS);