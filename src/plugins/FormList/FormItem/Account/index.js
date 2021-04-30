import React from 'react'
require('./index.less')

export default function Account(props){
    const {account}=props
    const bgColor=account ? "gray" : "transparent"
    return (
        <div className="Account" style={{background:`${bgColor}`}}>{account}</div>
    )
}