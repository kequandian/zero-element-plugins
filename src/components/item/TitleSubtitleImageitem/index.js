import React from 'react';
// import layout from '@/plugins/TodoList/designLayout'
require('./index.less')
import { AutoComponent } from 'zero-element-boot/lib/components';
import layout from './layout'
const presenter = require('@/components/item/TitleSubtitleImageitem/presenter')

// const CartSet = require('@/components/cart');


/**
 * @param {string} logo 图标
 * @param {string} title 标题
 * @param {string} subtitle 副标题
 * @param {string} timestamp 时间戳
 * @param onListItemClick 子项点击事件
 * @returns
 */

export default function TitleSubtitleImageitem(props) {
    const allComponents = { ...presenter }
    const config = {
        layout,
        ...props
    }
    return (
        //<AutoComponent onItemClick={onToDoItemClick}  {...config} cartSet={CartSet} allComponents={allComponents}/>

        <AutoComponent {...config} allComponents={allComponents} />
    )
}