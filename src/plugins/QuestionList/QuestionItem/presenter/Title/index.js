import React from 'react'
require('./index.less')

export default function Title(props){
    console.log(props)
    
    return (
        <div className="title" style={{background:"#1E90FF"}}>每日一练</div>
    )
}