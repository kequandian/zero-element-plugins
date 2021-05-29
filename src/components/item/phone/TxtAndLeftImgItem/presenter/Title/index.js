import React from 'react';
require('./index.less')

export default function Index({content}){
    return (
        <div className="titleContent">{content}</div>
    )
}