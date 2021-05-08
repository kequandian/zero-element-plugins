import React from 'react'
require('./index.less')

export default function Demonstration(props){
    const {demo}=props
    return (
        <div className="demonstration">{demo}</div>
    )
}