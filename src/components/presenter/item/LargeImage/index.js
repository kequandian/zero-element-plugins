import React from 'react';
require('./index.less')

/**
 * @param {string} url 图片路劲
 * @returns
 */
export default function ItemAvator({url}){
    return (
        <div className="largeImage">
            <img src={url}/>
        </div>
    )
}