import React from 'react';
require('./index.less')

export default function FormFieldTitle({content,corner}){
    return (
        <div className="FormFieldTitle" style={{borderRadius:`${corner}`}}>{content}</div>
    )
}