import React from 'react';
import SelectedCartOutSideIcon from "./index";
export default function Sandbox(props) {
  const {
    stroke = '#2196F3'
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "300px"
    }
  }, /*#__PURE__*/React.createElement(SelectedCartOutSideIcon, {
    isSelected: true,
    fill: 'transparent',
    stroke: stroke,
    lineWidth: "1px"
  }, /*#__PURE__*/React.createElement("div", null, "SelectedCartOutSideIcon")));
}