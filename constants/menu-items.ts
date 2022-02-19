import {
  Dashboard,
  AttachMoney,
  AddShoppingCart,
  Done,
  Business,
  HomeWork,
  History,
  AccountCircle,
  ManageAccounts,
  AccountBalanceWallet,
  Logout,
  Settings,
  Lock
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
    name: "Wallets",
    icon: AccountBalanceWallet,
    url: "/wallets",
    subItems: [
      {
        name: "New Fund",
        icon: AttachMoney,
        url: "/new-fund",
      },
      {
        name: "Purchased Funds",
        icon: Done,
        url: "/purchased-funds",
      },
    ],
  },
  {
    name: "Account",
    icon: AccountCircle,
    url: "/account",
    subItems: [
      {
        name: "Logout",
        icon: Logout,
        url: "/logout",
      },
      {
        name: "Modify Account",
        icon: ManageAccounts,
        url: "/modify-account",
        subItems: [
          {
            name: "Change Password",
            icon: Lock,
            url: "/change-password",
          },
        ],
      },
    ],
  },
  {
    name: "History",
    icon: History,
    url: "/transactions-history",
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