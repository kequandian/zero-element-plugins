import React from 'react';
import Body from "./index";
import SelectedCartTxtStatic from "../../cart/static/SelectedCart";
export default function Sandbox(props) {
  const config = {
    title: "Content",
    padding: "6px",
    lineColor: "#1496BB",
    activeLeftLine: "5px"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "300px"
    }
  }, /*#__PURE__*/React.createElement(SelectedCartTxtStatic, {
    isSelected: true
  }, /*#__PURE__*/React.createElement(Body, config)));
}