import React from 'react';
require('./index.less')

/**
 * @param {string} logo 图标
 * @returns
 */
export default function ItemAvator({url}){
    return (
        <div className="HeadPortrait">
            <img src={url}/>
        </div>
    )
}