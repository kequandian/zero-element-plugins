import React from 'react';
require('./index.less')

/**
 * @param {string} url 图片路径
 * @returns
 */
export default function Image({url}){
    return (
        <div className="imagePortrait">
            <img src={url}/>
        </div>
    )
}