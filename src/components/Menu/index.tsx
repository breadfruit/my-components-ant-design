/*
 * @Author: 翁佳琪
 * @Descripttion:
 * @version:
 * @Date: 2021-09-22 22:33:12
 * @LastEditors:
 * @LastEditTime: 2021-09-22 22:34:20
 */
import { FC } from 'react';
import Menu, { MenuProps } from './menu';
import SubMenu, { SubMenuProps } from './subsMenu';
import MenuItem, { MenuItemProps } from './menuitem';

export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>;
  SubMenu: FC<SubMenuProps>;
};
const TransMenu = Menu as IMenuComponent;

TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;

export default TransMenu;
