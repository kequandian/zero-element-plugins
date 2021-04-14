// import layout from '@/components/item/LogoSubtitleItem/layout';
import React, { useState, useEffect } from 'react';
// import { APIContainer } from 'zero-element-boot';
import TodoList from './index';

export default function(props){
    const commits=[
        {
            url:"https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav",
            title:"飞书助手",
            description:"🎦 屏幕共享进阶窍门",
            update_time:"昨天",
          },
          {
            url:"https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav",
            title:"飞书助手",
            description:"🎦 屏幕共享进阶窍门",
            update_time:"昨天",
          },
          {
            url:"https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav",
            title:"飞书助手",
            description:"🎦 屏幕共享进阶窍门",
            update_time:"昨天",
          }
    ];
        
    const config = {
        items: commits
    }

    return (
    <TodoList {...config} />
    )

}
