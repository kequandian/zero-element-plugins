import React from 'react';
// import { Icon } from 'antd-';
import TodoItem from '@/plugins/TodoList/TodoItem'
import layout from './layout'
import { AutoLayout } from 'zero-element-boot';
// require('./index.less')

export default function TodoList(props) {

    const { onhandleClick,onItemClickHandle,data } = props;

    
    const config = {
        items: data.length > 0 ? data : [],
        layout: layout,
    }
    const onClick = (item) => {
        console.log(item)
        onItemClickHandle();
    }

    return (
        <AutoLayout {...config}  onItemClick={onClick}>
            <TodoItem onToDoItemClick={onhandleClick} />
        </AutoLayout>
    )

}