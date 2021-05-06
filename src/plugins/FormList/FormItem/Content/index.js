import React,{useState} from 'react'
require('./index.less')
export default function Content(props){
    console.log(props)

    const {content,isSelected,logo}=props
  
    let color="#2f4f4f"
    if(isSelected){
        color="#5f9ea0"
    }else{
        color='#2f4f4f'
    }
    const Display=logo ? "inline-block" :"none"
    return (
        
        <div>
            <img src={logo} style={{display:`${Display}`}}/>
            <div className="Content" style={{color:`${color}`}}>{content}</div>
        </div>
    )
}