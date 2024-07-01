// types.ts

/**
 * Represents an item in the sidebar menu.
 */
export interface SidebarItem {
  text: string;
  icon: React.ReactNode;
  path?: PathType;
  dropdown?: DropdownType[];
}

export type PathType = any; // Type for path

export interface DropdownType {
  List: string;
  path?: PathType;
}

/**
 * Represents a section in the sidebar menu containing a list of items.
 */
export interface SidebarSection {
  title: string;
  list: SidebarItem[];
}

/**
 * Element to anchor menu in dashboard navbar
 */

export interface State {
  anchorElProfile: HTMLElement | null;
  anchorElNotifications: HTMLElement | null;
  anchorElContacts: HTMLElement | null;
  anchorElCountry: HTMLElement | null;
}
