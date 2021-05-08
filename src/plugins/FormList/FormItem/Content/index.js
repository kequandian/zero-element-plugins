import React from 'react'
require('./index.less')
export default function Content(props){
    const {content,isSelected}=props
    let color="#2f4f4f"
    if(isSelected){
        color="#5f9ea0"
    }else{
        color='#2f4f4f'
    }
    return (
        <div>
            <div className="Content" style={{color:`${color}`}}>{content}</div>
        </div>
    )
}