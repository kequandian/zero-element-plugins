import React from 'react';
// import { Icon } from 'antd-';
import TheAdItem from '@/plugins/TheAdList/TheAdItem';
import layout from './layout';
import { AutoLayout } from 'zero-element-boot';

export default function TheAdList(props){
    const comment=[
        {
            imgUrl:"https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav",
            title:"飞书助手",
            text:"🎦 屏幕共享进阶窍门",
            time:"昨天"
        },
        {
            imgUrl:"https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav",
            title:"飞书助手",
            text:"🎦 屏幕共享进阶窍门",
            time:"昨天"
        },
        {
            imgUrl:"https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav",
            title:"飞书助手",
            text:"🎦 屏幕共享进阶窍门",
            time:"昨天"
        }
    ];
    const config={
        items:comment,
        layout:layout,
    }
    return (
        <AutoLayout {...config} >
            <TheAdItem />
        </AutoLayout>
    )
    
}