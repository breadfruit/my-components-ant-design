import React, { FC, useState, createContext, CSSProperties } from 'react';
import classNames from 'classnames';
export type MenuMode = 'vertical' | 'vertical-left' | 'vertical-right' | 'horizontal' | 'inline';
export type MenuTheme = 'light' | 'dark';

import { MenuItemProps } from './menuitem';
export interface MenuProps {
  className?: string;
  mode?: MenuMode;
  onSelect: (selectnumber: string) => void;
  defaultIndex?: string;
  style?: CSSProperties;
  antdMenuTheme?: MenuTheme;
  defaultOpenSubMenus?: string[];
}

//在共享菜单中我们需要想到数组，模式，还有被选中的下标和选中后的回调事件
interface IMenuContext {
  index: string;
  onSelect?: (selectedIndex: string) => void;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}
//menu与item之间需要共享菜单数据，所以利用hook.context来进行数据共享，默认第一个被选中
export const MenuContext = createContext<IMenuContext>({ index: '0' });

// interface ReactChildren {
//     map<T, C>(children: C | ReadonlyArray<C>, fn: (child: C, index: number) => T):
//         C extends null | undefined ? C : Array<Exclude<T, boolean | null | undefined>>;
//     forEach<C>(children: C | ReadonlyArray<C>, fn: (child: C, index: number) => void): void;
//     count(children: any): number;
//     only<C>(children: C): C extends any[] ? never : C;
//     toArray(children: ReactNode | ReactNode[]): Array<Exclude<ReactNode, boolean | null | undefined>>;
// }

export const Menu: FC<MenuProps> = props => {
  const { className, mode, style, children, defaultIndex, onSelect, defaultOpenSubMenus } = props;
  const [currentActive, setActive] = useState(defaultIndex);
  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  });
  const handleClick = (index: string) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  };
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: index.toString(),
        });
      } else {
        console.error('Warning: Menu has a child which is not a MenuItem component');
      }
    });
  };
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>{renderChildren()}</MenuContext.Provider>
    </ul>
  );
};

export default Menu;
