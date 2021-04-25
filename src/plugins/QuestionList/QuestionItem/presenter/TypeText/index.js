import React from 'react'
require('./index.less')

export default function TypeText(props){
    const {typetext}=props
    return (
        <div className="TypeText">{typetext}</div>
    )
}