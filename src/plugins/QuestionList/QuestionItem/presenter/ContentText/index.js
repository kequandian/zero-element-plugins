import React from 'react'
require('./index.less')

export default function ContentText(props){
    const {content}=props

    return (
        <div className="ContentText">{content}</div>
    )
}