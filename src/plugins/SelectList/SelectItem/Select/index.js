require('./index.less')
import React from 'react'
import NamedCart from 'zero-element-boot/lib/components/NamedCart'
import NamedLayout from 'zero-element-boot/lib/components/NamedLayout'

export default function Select(props){
    const {text}=props
    return (
        <NamedCart xname={text}>
        {/* <NamedLayout xname={layout}> */}
        <div className="select">{text}</div>
        {/* </NamedLayout> */}
        </NamedCart>
        
    )
}