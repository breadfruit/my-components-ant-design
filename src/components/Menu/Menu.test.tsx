import React from 'react';
import { render, RenderResult, fireEvent } from '@testing-library/react';
import Menu, { MenuProps } from './Menu';
import MenuItem from './MenuItem';

const testProps: MenuProps = {
  defaultIndex: '0',
  onSelected: jest.fn(),
  className: 'test',
};
const testVerProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical',
};
const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem index={'0'}>active</MenuItem>
      <MenuItem index={'1'}>hhha</MenuItem>
      <MenuItem index={'2'}>xyz</MenuItem>
      <MenuItem index={'3'} disabled>
        disabled
      </MenuItem>
    </Menu>
  );
};
let wrapper: RenderResult,
  wrapper2: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;
describe('test Menu and MenuItem component in default(horizontal) mode', () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    //wrapper.container.append(createStyleFile())
    menuElement = wrapper.getByTestId('test-menu');
    activeElement = wrapper.getByText('active');
    disabledElement = wrapper.getByText('disabled');
  });
  it('should render correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass('menu test');
    //expect(menuElement.querySelectorAll(':scope > li').length).toEqual(5)
    expect(activeElement).toHaveClass('menu-item is-active');
    expect(disabledElement).toHaveClass('menu-item is-disabled');
  });
  it('click items should change active and call the right callback', () => {
    const thirdItem = wrapper.getByText('xyz');
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass('is-active');
    expect(activeElement).not.toHaveClass('is-active');
    expect(testProps.onSelect).toHaveBeenCalledWith('2');
  });
  it('should show dropdown items when hover on subMenu', async () => {});
});
