import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import classNames from 'classnames';
export type ButtonType = 'primary' | 'ghost' | 'dashed' | 'link' | 'text' |'default';
export type ButtonShape = 'circle' | 'round';
export type ButtonSize = 'larget' | 'middle' | 'small' | undefined;
export type ButtonLoading  = boolean | { delay: number };
export type ButtonDisplay  = boolean;
export type ButtonHTMLType = 'submit' | 'button' | 'reset'
export interface BaseButtonProps{
    btnType ?: ButtonType;
    shape ?: ButtonShape;
    size ?: ButtonSize;
    loading ?: ButtonLoading;
    display ?: ButtonDisplay;
    children: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
    href?: string;
}

//分为两类按钮(普通点击按钮和点击跳转按钮)
export type NativeButtonProps = {
    htmlType?: ButtonHTMLType;
    onClick ?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;

export type AnchorButtonProps = {
    href: string;
    target?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
} & Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;

//一个已知的类型每个属性都变为可选的：
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

export const Button: FC<ButtonProps> = (props) => {
    const { 
        btnType,
        className,
        disabled,
        size,
        children,
        href,
        ...restProps
    } = props
}