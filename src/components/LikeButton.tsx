/*
 * @Author: 翁佳琪
 * @Descripttion: 
 * @version: 
 * @Date: 2021-09-17 17:01:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-17 18:14:31
 */
import React, { useEffect, useState } from 'react'
// const LikeButton: React.FC = () => {
//     const [obj, setObj] = useState({like: 0 , on: true})
//     return (
//         <div>
//             <button onClick={() => {setObj({like: obj.like+1, on: obj.on})}}>
//                 👍{obj.like}
//             </button>
//             <hr />
//             <button onClick={() => {setObj({like: obj.like, on: !obj.on})}}>
//                 {obj.on ? 'ON' : 'OFF'}
//             </button>
//         </div>

//     )
// }
const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0);
    const [on, setOn] = useState(true);
    useEffect(() => {
        console.log('inner')
        document.title = `点击了${like}次`
    },[like])
    return(
        <div>
            <button onClick = {() => {setLike(like+1)}}>
                👍{like}
            </button>
            <button onClick = {() => {setOn(!on)}}>
                {on ? 'ON' :'OFF'}
            </button>
        </div>
    )
}
export default LikeButton
