import React from 'react';
// import { Icon } from 'antd-';
import TodoItem from '@/plugins/TodoList/TodoItem'
// import layout from './designLayout'
import layout from './layout'
import { AutoLayout } from 'zero-element-boot';
// require('./index.less')

export default function TodoList(props) {
    // console.log(props)

    const { onhandleClick,onItemClickHandle,data } = props;

    
    const config = {
        items: data.length > 0 ? data : [],
        layout: layout,
    }
    const onClick = (item) => {
        console.log(item)
        onItemClickHandle();
    }
    // console.log(config)
    return (
        <AutoLayout {...config}  onItemClick={onClick}>
            <TodoItem onToDoItemClick={onhandleClick} />
        </AutoLayout>
    )

}