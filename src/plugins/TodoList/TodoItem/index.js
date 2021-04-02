import React from 'react';
// import layout from '@/plugins/TodoList/designLayout'
require('./index.less')
import ItemAvator from '@/components/presenter/item/ItemAvator'
import ContentText from '@/plugins/TodoList/TodoItem/TitleContent'
import ItemIconAction from '@/components/presenter/item/ItemIconAction'
import { AutoComponent} from 'zero-element-boot/lib/components';
import layout from './layout'

const CartSet = require('@/components/cart');


/**
 * @param {string} logo 图标
 * @param {string} title 标题
 * @param {string} subtitle 副标题
 * @param {string} timestamp 时间戳
 * @returns
 */

export default function TodoItem(props){

    const { onToDoItemClick } = props;
    
    const allComponents={
        ItemAvator,
        ContentText,
        ItemIconAction,
    };


    const config={
        layout,
        ...props
    }
    return (
            <AutoComponent onItemClick={onToDoItemClick}  {...config} cartSet={CartSet} allComponents={allComponents}/>
    )
}