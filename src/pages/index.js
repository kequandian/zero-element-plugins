import React from 'react';

// import TestUserSelection from '../plugins/testUserSelection/TestUserSelection';
// import  NewDemo  from '@/plugins/NewDemo';
// import NewDemo from '@/plugins/NewDemo/Sandbox';
// import AdList from '@/plugins/AdList/Sandbox'
import NewDemo from '@/plugins/NewDemo/example_two'

export default function inxe(props) {

  const onItemClickHandle = () => {
      console.log('event to dismiss the component')
  }

  return <NewDemo onItemClickHandle={onItemClickHandle} />
}