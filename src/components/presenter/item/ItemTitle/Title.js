import React from 'react';
require('./index.less')

export default function Title(props){
    const {title}=props
    return (
        <div className="Title_text">{title}</div>
    )
}