import React from 'react';
require('./index.less')

export default function Index({content}){
    return (
        <div className="bold_text_content">{content}</div>
    )
}