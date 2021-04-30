import React,{useState} from 'react'

export default function Button(props){
    // const onHandClick=()=>{
    //     const w=window.open('about:blank')
    //     w.location.href=('http://www.baidu.com')
    //     alert("这是一个按钮")
    // }
    // const {fill="#cacaca"}=props
    const {children}=props
    const [onHover,setOnHover]=useState(false)
    const toggleHover=()=>{
        // console.log("123")
        const result=!onHover;
        setOnHover(result)
    }
    let bgColor="pink"
    if(onHover){
        bgColor="orange"
    }
    else{
        bgColor="pink"
    }
    // return React.Children.map(children,child=>{
        return (
            // <button value="按钮" onClick={onHandClick}>点击</button>
            <div style={{
                width:"200px",
                height:"100px",
                border:"1px solid #000",
                textAlign:"center",
                lineHeight:"100px",
                background:`${bgColor}`
            }} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                {/* {child} */}
            </div>
        )
    // })    
}