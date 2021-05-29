import React from 'react';
// import layout from '@/plugins/TodoList/designLayout'
require('./index.less')
import { AutoComponent } from 'zero-element-boot/lib/components';
import layout from './layout'
const presenter = require('@/components/item/phone/TxtAndLeftImgItem/presenter')

// const CartSet = require('@/components/cart');


export default function TxtAndLeftImgItem(props) {
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