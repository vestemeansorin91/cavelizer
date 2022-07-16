import {SidenavItem} from "../types/interfaces/sidenav.interface";

export const SIDENAV: SidenavItem[] = [
  {
    name: 'Dashboard',
    pathUrl: ['/dashboard', 'panel'],
    icon: 'las la-desktop',
  },
  {
    name: 'Clients',
    pathUrl: [],
    icon: 'las la-user-friends',
    submenus: [
      {
        name: 'Users',
        pathUrl: ['/dashboard', 'users'],
        icon: 'las la-user-alt',
      },
      {
        name: 'Roles',
        pathUrl: ['/dashboard', 'roles'],
        icon: 'las la-id-badge',
      },
      {
        name: 'Permissions',
        pathUrl: ['/dashboard', 'permissions'],
        icon: 'las la-user-shield',
      },
    ]
  },
  {
    name: 'Shop',
    pathUrl: [],
    icon: 'las  la-store-alt',
    submenus: [
      {
        name: 'Products',
        pathUrl: ['/dashboard', 'products'],
        icon: 'las la-shopping-bag',
      },
      {
        name: 'Categories',
        pathUrl: ['/dashboard', 'categories'],
        icon: 'las la-list',
      },
      {
        name: 'Tags',
        pathUrl: ['/dashboard', 'tags'],
        icon: 'las la-tag',
      },
    ]
  },
  {
    name: 'Blog',
    pathUrl: [],
    icon: 'las la-blog',
    submenus: [
      {
        name: 'Articles',
        pathUrl: ['/dashboard', 'articles'],
        icon: 'las la-newspaper',
      },
      {
        name: 'Comments',
        pathUrl: ['/dashboard', 'comments'],
        icon: 'las la-comment',
      },
    ]
  },
  {
    name: 'Documentation',
    pathUrl: ['/dashboard', 'docs'],
    icon: 'las la-book',
  },
  {
    name: 'Components',
    pathUrl: ['/dashboard', 'cavelizer-components'],
    icon: 'las la-shapes',
  },
  {
    name: 'Chat',
    pathUrl: ['/dashboard', 'chat'],
    icon: 'las la-comments',
  },
  {
    name: 'Go to shop',
    pathUrl: ['/shop'],
    icon: 'las  la-store-alt',
  },
];

