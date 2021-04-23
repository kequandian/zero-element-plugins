// import layout from '@/components/item/LogoSubtitleItem/layout';
import React, { useState, useEffect } from 'react';
// import { APIContainer } from 'zero-element-boot';
import useTokenRequest from 'zero-element-boot/lib/components/hooks/useTokenRequest';
import TodoList from './index';

import bindFiles from './gateway.json'

export default function(props){

    // const data=[
    //     {
    //         url:"https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav",
    //         title:"待办事项",
    //         description:"🎦屏幕共享进阶窍门",
    //         update_time: "昨天",
    //       },
    //       {
    //         url:"https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav",
    //         title:"待办事项",
    //         description:"请假审批",
    //         update_time:"昨天",
    //       },
    //       {
    //         url:"https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav",
    //         title:"待办事项",
    //         description:"🎦屏幕共享进阶窍门",
    //         update_time:"昨天",
    //       }
    // ];

    const api = '/api/TodoList';
    
    const [ data ] = useTokenRequest({api, bindFiles});

    const onItemClickHandle = (item) => {
       console.log('event to dismiss the component:', item)
    }

    return (
      <TodoList onItemClickHandle={onItemClickHandle} items={data} />
    )
}
