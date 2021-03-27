import React from 'react';

// import TestUserSelection from '../plugins/testUserSelection/TestUserSelection';
// import  NewDemo  from '@/plugins/NewDemo';
// import NewDemo from '@/plugins/NewDemo/Sandbox';
// import AdList from '@/plugins/AdList/Sandbox'
// import NewDemo from '@/plugins/NewDemo/Example_two'
import TheAdList from '@/plugins/TheAdList'

export default function index(props) {

  const onItemClickHandle = () => {
      console.log('event to dismiss the component')
  }

  return <TheAdList onItemClickHandle={onItemClickHandle} />
}