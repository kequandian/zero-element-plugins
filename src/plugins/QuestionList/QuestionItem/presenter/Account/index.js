import React from 'react'
require('./index.less')

export default function Account(props){
    const {account}=props
    return (
        <div>
            <div className="Account">解题 </div>
            <div className="AccountNum">{account} </div>
        </div>
    )
}