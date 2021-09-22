import React, { useContext, useState, FunctionComponentElement } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
import { MenuItemProps } from './menuitem';

export interface SubMenuProps {
  index?: string;
  title?: string;
  className?: string;
}

const SubMenu: React.FC<SubMenuProps> = props => {
  const { index, children, title } = props;
  const context = useContext(MenuContext);
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>;
  const isOpend = index && context.mode === 'vertical' ? openedSubMenus.includes(index) : false;
  const [menuOpen, setOpen] = useState(isOpend);
  const classes = classNames('menu-item submenu-item', classNames, {
    'is-active': context.index === index,
    'is-open': menuOpen,
    'is-vertical': context.mode === 'vertical',
  });
  let timer: any;
  //防抖 只执行最后一次
  const handleClick = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setOpen(toggle);
    }, 300);
  };
  const clickEvents =
    context.mode === 'vertical'
      ? {
          onClick: handleClick,
        }
      : {};
  const renderChildren = () => {
    const subMenuClasses = classNames('viking-submenu', {
      'menu-opened': menuOpen,
    });
    const renderChildren = () => {
      const subMenuClasses = classNames('viking-submenu', {
        'menu-opened': menuOpen,
      });
      const childrenComponent = React.Children.map(children, (child, i) => {
        const childElement = child as FunctionComponentElement<MenuItemProps>;
        if (childElement.type.displayName === 'MenuItem') {
          return React.cloneElement(childElement, {
            index: `${index}-${i}`,
          });
        } else {
          console.error('Warning: SubMenu has a child which is not a MenuItem component');
        }
      });
      return (
        <div>
          <ul className={subMenuClasses}>{childrenComponent}</ul>
        </div>
      );
    };
  };
  return (
    <li>
      <div key={index} className={classes}>
        {title}
      </div>
      {renderChildren()}
    </li>
  );
};
SubMenu.displayName = 'SubMenu';
export default SubMenu;
