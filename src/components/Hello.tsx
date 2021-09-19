/*
 * @Author: 翁佳琪
 * @Descripttion: 
 * @version: 
 * @Date: 2021-09-17 15:19:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-17 16:50:07
 */
import React from 'react'
interface HelloProps  {
    message?: string
}
const Hello: React.FC<HelloProps> = (props: HelloProps) => {
    return (
        <h2>{props.message}</h2>
    )
}
Hello.defaultProps = {
    message: 'hello'
}
export default Hello;