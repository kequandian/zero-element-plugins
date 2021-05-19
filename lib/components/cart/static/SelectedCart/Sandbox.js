import React from 'react';
import SelectedRightLineCart from "./index";
import SelectedRightLineCartBody from "../../../item/SelectedCartTxtStatic";
export default function Sandbox(props) {
  const SelectedRightLineCartBodyConfig = {
    title: "SelectedRightLineCart",
    lineColor: "#1496BB",
    activeLeftLine: "5px",
    fill: 'transparent',
    margin: '0'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "300px"
    }
  }, /*#__PURE__*/React.createElement(SelectedRightLineCart, {
    isSelected: true
  }, /*#__PURE__*/React.createElement(SelectedRightLineCartBody, SelectedRightLineCartBodyConfig)));
}