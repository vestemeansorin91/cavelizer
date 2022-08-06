import { SidenavItem } from '../../types/interfaces/sidenav.interface';

export const SIDENAV: SidenavItem[] = [
  {
    name: 'Dashboard',
    pathUrl: ['/dashboard', 'panel'],
    icon: 'dashboard'
  },
  {
    name: 'Clients',
    pathUrl: [],
    icon: 'users',
    submenus: [
      {
        name: 'Users',
        pathUrl: ['/dashboard', 'users'],
        icon: 'user'
      },
      {
        name: 'Roles',
        pathUrl: ['/dashboard', 'roles'],
        icon: 'role'
      },
      {
        name: 'Permissions',
        pathUrl: ['/dashboard', 'permissions'],
        icon: 'permission'
      }
    ]
  },
  {
    name: 'Shop',
    pathUrl: [],
    icon: 'shop',
    submenus: [
      {
        name: 'Products',
        pathUrl: ['/dashboard', 'products'],
        icon: 'product'
      },
      {
        name: 'Categories',
        pathUrl: ['/dashboard', 'categories'],
        icon: 'category'
      },
      {
        name: 'Tags',
        pathUrl: ['/dashboard', 'tags'],
        icon: 'tag'
      }
    ]
  },
  {
    name: 'Blog',
    pathUrl: [],
    icon: 'article',
    submenus: [
      {
        name: 'Articles',
        pathUrl: ['/dashboard', 'articles'],
        icon: 'article'
      },
      {
        name: 'Comments',
        pathUrl: ['/dashboard', 'comments'],
        icon: 'comment'
      }
    ]
  },
  {
    name: 'Documentation',
    pathUrl: ['/dashboard', 'docs'],
    icon: 'docs'
  },
  {
    name: 'Components',
    pathUrl: ['/dashboard', 'components'],
    icon: 'components'
  },
  {
    name: 'Icons',
    pathUrl: ['/dashboard', 'icons'],
    icon: 'icons'
  },
  {
    name: 'Chat',
    pathUrl: ['/dashboard', 'chat'],
    icon: 'chat'
  },
  {
    name: 'Go to shop',
    pathUrl: ['/shop'],
    icon: 'shop'
  }
];
