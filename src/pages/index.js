import React from 'react';

// import TestUserSelection from '../plugins/testUserSelection/TestUserSelection';
// import  NewDemo  from '@/pages/NewDemo';
// import NewDemo from '@/plugins/NewDemo/Sandbox';
// import AdList from '@/plugins/AdList/Sandbox'
// import NewDemo from '@/plugins/NewDemo/Example_two'
// import TheAdList from '@/plugins/TheAdList'
import Message from '@/plugins/TodoList/Message'
import PageCart from '@/components/cart/PageCart'
import TestUserSelection from '@/plugins/testUserSelection/TestUserSelection'
import PageGridContainer from '@/components/container/PageGridContainer';
// import TodoList from '@/plugins/TodoList'
import TodoListSandbox from '@/plugins/TodoList/Sandbox'
import Demo from '@/components/container/PageGridContainer/Demo'
import Exercise from '@/pages/Exercise'
import QuestionList from '@/plugins/QuestionList/Sandbox'
import Top from '@/plugins/QuestionList/Top'
// import QuestionList from '@/plugins/QuestionList'
// import Account from '@/plugins/QuestionList/QuestionItem/presenter/Diffect'
import ComponentsList from '@/plugins/ComponentsList'
import FormList from '@/plugins/FormList'
import Project from '@/plugins/Project'
import LayoutList from '@/plugins/SelectList/SelectItem/LayoutList'
import CompositeList from '@/plugins/SelectList/SelectItem/CompositeList'
import CompoundComponents from '@/plugins/ComponentManage/compoments/CompoundComponents'
import ComponentManage from '@/plugins/ComponentManage'

// 调用路由
import { formConfig } from '@/pages/router.js'

// import { get as getEndpoint } from 'zero-element/lib/utils/request/endpoint';


export default function index(props) {

  const onItemClickHandle = () => {
    console.log('event to dismiss the component')
  }




  return (
    // <PageCart backgroundColor={"#f0f4f7"}>
    //   <Message onItemClickHandle={onItemClickHandle} {...props} />
    // </PageCart>
    // <PageCart>
    //   <PageGridContainer title={"邮件"} subtitle={"more"}>
    //    <TodoListSandbox {...props}/>
    //  </PageGridContainer>
    // </PageCart>
    // <TestUserSelection onItemClickHandle={onItemClickHandle} {...props}/>  
    // <Top>
    //   <QuestionList />
    // </Top>
    // <CompositeList />
    <div style={{display:'flex'}}>
      <div style={{display:'flex', flex:1,flexDirection:'row'}}>
        <div style={{width: '210px', margin: '0 18px 0 10px'}}>
          <FormList {...formConfig} />
        </div>
      </div>
        <ComponentManage/>
    </div>
    // <LayoutList />
    // <Project/>
  )
}