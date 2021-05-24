import React from 'react';

require("./index.less");

export default function Diffect(props) {
  const {
    diffect,
    colors
  } = props;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "Diffect"
  }, "\u96BE\u5EA6 "), /*#__PURE__*/React.createElement("div", {
    className: "Diffectily",
    style: {
      color: `${colors}`,
      display: "inline",
      margin: "0 0 0 10px"
    }
  }, diffect, " "));
}