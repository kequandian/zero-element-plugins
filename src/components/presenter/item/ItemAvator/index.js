import React from 'react';
require('./index.less')

export default function ImageAnimation(props){
    const {imgUrl}=props
    return (
        <div className="HeadPortrait">
            <img src={imgUrl}/>
        </div>
    )
}