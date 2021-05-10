require('./index.less')
import React from 'react'
import NamedCart from 'zero-element-boot/lib/components/NamedCart'

export default function SelectCart(props){
    const {text}=props
    return (
            <div className="select">{text}</div>
        
    )
}