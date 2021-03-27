import React from 'react';
require('./index.less')

export default function Text(props){
    const {text}=props
    return (
        <div className="Text_text">{text}</div>
    )
}