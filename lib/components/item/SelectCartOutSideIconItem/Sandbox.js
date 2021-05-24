import React from 'react';
import Body from "./index";
import SelectedCartOutSideIcon from "../../cart/SelectedCartOutSideIcon";
export default function Sandbox(props) {
  const config = {
    title: "Content",
    isSelected: true
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "300px"
    }
  }, /*#__PURE__*/React.createElement(SelectedCartOutSideIcon, {
    padding: "0px",
    stroke: "#2196F3",
    lineWidth: "1px"
  }, /*#__PURE__*/React.createElement(Body, config)));
}