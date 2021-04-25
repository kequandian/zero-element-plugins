import React from 'react'
require('./index.less')

export default function Title(props){
    const {title,color}=props
    
    return (
        <div className="title" style={{background:`${color}`}}>{title}</div>
    )
}