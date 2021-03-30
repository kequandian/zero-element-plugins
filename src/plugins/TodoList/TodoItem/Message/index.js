import React, { useState } from 'react';
import { Tabs } from 'antd';
import TodoList from '@/plugins/TodoList/SandBox'
import display from '@/components/presenter/item/ItemIconAction'
require('./index.less')

const { TabPane } = Tabs;
export default function callback(key) {
  const onhandleClick=(data)=>{
    // console.log('data = ',data);
  }

  return(
    <div className="TheLabel">
      <Tabs defaultActiveKey="1" onChange={callback} >
        <TabPane tab="未读消息" key="1">
            <TodoList onhandleClick={onhandleClick}  display={`${display}`}/>
        </TabPane>
        <TabPane tab="全部消息" key="2">
            <TodoList />
        </TabPane>
      </Tabs>
    </div>
  )
  
}

