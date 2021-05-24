import React from 'react';
import ItemCart from "./index";
export default function Sandbox(props) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "300px"
    }
  }, /*#__PURE__*/React.createElement(ItemCart, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '50px',
      padding: '10px'
    }
  }, "ItemCart")));
}