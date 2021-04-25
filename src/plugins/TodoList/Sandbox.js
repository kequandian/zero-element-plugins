import React from 'react';
import TodoList from './index';


export default function(props){

    const data=[
        {
            url:"https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav",
            title:"待办事项",
            description:"🎦屏幕共享进阶窍门",
            update_time: "昨天",
          },
          {
            url:"https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav",
            title:"待办事项",
            description:"请假审批",
            update_time:"昨天",
          },
          {
            url:"https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav",
            title:"待办事项",
            description:"🎦屏幕共享进阶窍门",
            update_time:"昨天",
          }
    ];
    const onItemClickHandle = (item) => {
       console.log('event to dismiss the component:', item)
    console.log("item=",item)

    }
    return (
      <TodoList onToDoItemClick={onItemClickHandle} items={data} />
    )
}
