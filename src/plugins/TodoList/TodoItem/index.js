import React from 'react';
import layout from './layout'
require('./index.less')
import ImageAnimation from '@/components/presenter/item/ItemAvator'
import ContentText from '@/plugins/TodoList/TodoItem/Content_text'
import ContentFinish from '@/components/presenter/item/ItemIconAction'
import { AutoComponent} from 'zero-element-boot';

const CartSet = require('@/components/cart');

export default function TodoItem(props){

    const { onToDoItemClick } = props;
    
    const allComponents={
        ImageAnimation,
        ContentText,
        ContentFinish,
    };


    const config={
        layout,
        ...props
    }
    return (
            <AutoComponent onItemClick={onToDoItemClick}  {...config} cartSet={CartSet} allComponents={allComponents}/>
    )
}