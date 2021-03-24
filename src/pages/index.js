import React from 'react';

// import TestUserSelection from '../plugins/testUserSelection/TestUserSelection';
import { NewDemo } from '@/export';
// import NewDemo from '@/plugins/NewDemo/Sandbox';

export default function inxe(props) {

  const onItemClickHandle = () => {
      console.log('event to dismiss the component')
  }

  return <NewDemo onItemClickHandle={onItemClickHandle} />
}