import React,{useState} from 'react'
require('./index.less')
export default function Content(props){
    console.log("props,",props)
    const {content,isSelected}=props
  
    let color="#2f4f4f"
    if(isSelected){
        color="#5f9ea0"
    }else{
        color='#2f4f4f'
    }
    console.log(color)
    return (
        <div className="Content" style={{color:`${color}`}}>{content}</div>
    )
}