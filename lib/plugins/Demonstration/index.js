import React from 'react';

require("./index.less");

export default function Demonstration(props) {
  const {
    demo
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "demonstration"
  }, demo);
}