require('./index.less')
import React from 'react'
import NamedLayout from 'zero-element-boot/lib/components/NamedLayout'

export default function Select(props){
    const {text}=props
    return (
        <NamedLayout xname={text}>
            <div className="select">{text}</div>
        </NamedLayout>
    )
}