import React from 'react';
import Body from "./index";
import SelectedCart from "../../cart/SelectedCart";
export default function Sandbox(props) {
  const config = {
    title: "Content",
    isSelected: true
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "300px"
    }
  }, /*#__PURE__*/React.createElement(SelectedCart, {
    padding: "0px"
  }, /*#__PURE__*/React.createElement(Body, config)));
}