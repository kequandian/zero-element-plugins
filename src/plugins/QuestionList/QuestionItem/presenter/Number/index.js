import React from 'react'
require('./index.less')

export default function Number(props){
    const {number}=props
    return (
        <div className="Number">{number}</div>
    )
}