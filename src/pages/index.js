import React from 'react';

// import TestUserSelection from '../plugins/testUserSelection/TestUserSelection';
// import  NewDemo  from '@/plugins/NewDemo';
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
// import Exercise from '@/plugins/Exercise'
import QuestionList from '@/plugins/QuestionList/Sandbox'
import Top from '@/plugins/QuestionList/Top'
// import QuestionList from '@/plugins/QuestionList'
// import Account from '@/plugins/QuestionList/QuestionItem/presenter/Diffect'
import ComponentsList from '@/plugins/ComponentsList'

export default function index(props) {

  // const onItemClickHandle = () => {
  //     console.log('event to dismiss the component')
  // }

  return (
    // <PageCart backgroundColor={"#f0f4f7"}>
    //   <Message onItemClickHandle={onItemClickHandle} {...props} />
    // </PageCart>
      // <PageCart>
      //   <PageGridContainer title={"邮件"} subtitle={"more"}>
      //    <TodoList onItemClickHandle={onItemClickHandle} {...props}/>
      //  </PageGridContainer>
      // </PageCart>
    // <TestUserSelection onItemClickHandle={onItemClickHandle} {...props}/>  

      //  <TodoListSandbox />
      //   <Top>
      //     <QuestionList />
      //  </Top>
      <PageGridContainer title={"自定义组件"} subtitle={" · · · "}>
          <ComponentsList />
      </PageGridContainer>
    )
}