import React, { createContext, FC, useState } from 'react';
import classNames from 'classnames';
import { MenuItemProps } from './MenuItem';

export type MenuType = 'horizontal' | 'vertical';
export interface MenuProps {
  className?: string;
  style?: React.CSSProperties;
  index?: string;
  defaultIndex?: string;
  onSelected?: (index: string) => void;
  mode?: MenuType;
}
interface IMenuContext {
  index?: string;
  onSelected?: (selectedindex: string) => void;
  mode?: MenuType;
}
export const MenuContext = createContext<IMenuContext>({ index: '0' });

const Menu: FC<MenuProps> = props => {
  const { style, children, defaultIndex, className, onSelected, mode } = props;
  const [curindex, setActive] = useState(defaultIndex);
  const classes = classNames('menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  });
  const handleClick = (index: string) => {
    setActive(index);
    if (onSelected) {
      onSelected(index);
    }
  };
  const passedContext: IMenuContext = {
    index: curindex ? curindex : '0',
    onSelected: handleClick,
  };
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      console.log(childElement.type);
      if (displayName === 'MenuItem') {
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
