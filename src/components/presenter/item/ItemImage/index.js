import React from 'react';
require('./index.less')

/**
 * @param {string} url 图片路径
 * @returns
 */
export default function ItemImage({url}){
    return (
        <div className="ItemImage">
            <img src={url}/>
        </div>
    )
}