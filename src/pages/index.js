import React from 'react';

// import TestUserSelection from '../plugins/testUserSelection/TestUserSelection';
// import  NewDemo  from '@/plugins/NewDemo';
// import NewDemo from '@/plugins/NewDemo/Sandbox';
// import AdList from '@/plugins/AdList/Sandbox'
// import NewDemo from '@/plugins/NewDemo/Example_two'
// import TheAdList from '@/plugins/TheAdList'
import Message from '@/plugins/TodoList/TodoItem/Message'
import PageCart from '@/components/cart/PageCart'
import TestUserSelection from '@/plugins/testUserSelection/TestUserSelection'

export default function index(props) {

  const onItemClickHandle = () => {
      console.log('event to dismiss the component')
  }
  return (
    <PageCart alignItems={"flex-start"} backgroundColor={"#f0f4f7"}>
      <Message onItemClickHandle={onItemClickHandle} {...props} />
    </PageCart>
  )
}