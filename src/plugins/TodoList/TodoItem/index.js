import React from 'react';
// import layout from '@/plugins/TodoList/designLayout'
require('./index.less')
import ImageAnimation from '@/components/presenter/item/ItemAvator'
import ContentText from '@/plugins/TodoList/TodoItem/Content_text'
import ContentFinish from '@/components/presenter/item/ItemIconAction'
import { AutoComponent, AutoLayout} from 'zero-element-boot/lib/components';
import layout from './layout'

const CartSet = require('@/components/cart');

export default function TodoItem(props){
    
    console.log(props)

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