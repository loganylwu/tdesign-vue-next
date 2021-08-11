import { MenuValue } from '../../types/menu/TdMenuProps';
import { Ref, VNodeNormalizedChildren } from 'vue';

export interface TdMenuItem {
  value: MenuValue;
  label: VNodeNormalizedChildren;
}

export interface TdMenuInterface {
  activeIndexValue: Ref<MenuValue>;
  expandedArray?: Ref<MenuValue[]>;
  mode: Ref<string>;
  isHead: boolean;
  select: (val: MenuValue) => void;
  open?: (val: MenuValue) => boolean;
  selectSubMenu?: (items: TdMenuItem[]) => void;
}

export interface TdSubMenuInterface {
  hasIcon?: boolean;
  addMenuItem?: (item: TdMenuItem) => void;
}