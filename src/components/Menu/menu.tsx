import React, { createContext, FC, useState } from 'react';
import classNames from 'classnames';

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
  const passContext: IMenuContext = {
    index: curindex ? curindex : '0',
    onSelected: handleClick,
  };
  return (
    <ul className={classes} data-testid="test-menu" style={style}>
      <MenuContext.Provider value={passContext}>{children}</MenuContext.Provider>
    </ul>
  );
};
export default Menu;
