import React from 'react'

export default function Button(props){
    const onHandClick=()=>{
        alert("这是一个按钮")
        // console.log("这是一个按钮")
        // age
    }
    // const onHover=()=>{
    //     alert("你触摸了我")
    // }
    return (
        // <Button value="按钮" onClick={onHandClick}> 点击</Button>
        // 1111
        // <a onClick={onHandClick}> Click me</a>
        <button value="按钮" onClick={onHandClick}>点击</button>
    )
}