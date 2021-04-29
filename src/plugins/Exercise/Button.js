import React from 'react'

export default function Button(props){
    // const onHandClick=()=>{
    //     const w=window.open('about:blank')
    //     w.location.href=('http://www.baidu.com')
    //     alert("这是一个按钮")
    // }
    const toggleHover=()=>{
        console.log("123")
    }
    
    return (
        // <button value="按钮" onClick={onHandClick}>点击</button>
        <div style={{width:"200px",height:"100px",border:"1px solid #000",textAlign:"center",lineHeight:"100px"}} onMouseEnter={toggleHover}>这是一个div</div>
    )
}