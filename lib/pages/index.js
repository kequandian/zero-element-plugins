import React from 'react';
import TestUserSelection from "../plugins/testUserSelection/TestUserSelection";
export default function inxe(props) {
  const onItemClickHandle = () => {
    console.log('event to dismiss the component');
  };

  return /*#__PURE__*/React.createElement(TestUserSelection, {
    onItemClickHandle: onItemClickHandle
  });
}