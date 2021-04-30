import React, { useState } from 'react';
import { Tabs } from 'antd';
import NewsList from '@/plugins/NewsList'
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
        <TabPane tab="花讯" key="1" tabBarStyle={{margin:"auto"}}>
            <NewsList onhandleClick={onhandleClick}  display={`${display}`}/>
        </TabPane>
        <TabPane tab="公告" key="2" tabBarStyle={{paddingLeft:"100px"}}>
            <NewsList />
        </TabPane>
        <TabPane tab="宝筵设戏" key="3" tabBarStyle={{paddingLeft:"100px"}}>
            <NewsList />
        </TabPane>
      </Tabs>
    </div>
  )
  
}

