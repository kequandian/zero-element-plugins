import React from 'react';
import SelectedCart from "./index";
export default function Sandbox(props) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "300px"
    }
  }, /*#__PURE__*/React.createElement(SelectedCart, {
    isSelected: true
  }, /*#__PURE__*/React.createElement("div", null, "SelectedCart")));
}