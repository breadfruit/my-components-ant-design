/*
 * @Author: 翁佳琪
 * @Descripttion: 
 * @version: 
 * @Date: 2021-09-17 17:42:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-17 20:17:56
 */
import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';

const MouseTracker: React.FC = () => {
    const [page,setPage ]= useState({x:0,y:0});
    useEffect(() => {
        console.log('add effect', page.x)
        const updateMouse = (e: MouseEvent) => {
            console.log('inner')
            setPage({x:e.clientX,y:e.clientY});
        }
        console.log('remove effect', page.x)
        document.addEventListener('click', updateMouse)
        return () => {
            console.log('remove effect', page.x)
            document.removeEventListener('click', updateMouse)
        }
    })
    console.log('before render', page.x)
    return(
        <div>
            X:{page.x} Y:{page.y}
        </div>
    )
}
export default  MouseTracker;