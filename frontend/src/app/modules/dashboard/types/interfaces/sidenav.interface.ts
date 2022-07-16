export interface SidenavItem {
  name: string;
  pathUrl: string[];
  icon: string;
  submenus?: SidenavItem[];
  isSubmenuExpanded?: boolean;
}
