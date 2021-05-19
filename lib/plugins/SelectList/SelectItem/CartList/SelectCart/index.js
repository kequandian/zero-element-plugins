require("./index.less");

import React from 'react';
import NamedCart from 'zero-element-boot/lib/components/NamedCart';
export default function SelectCart(props) {
  const {
    text
  } = props;
  return /*#__PURE__*/React.createElement(NamedCart, {
    xname: text
  }, /*#__PURE__*/React.createElement("div", {
    className: "select"
  }, text));
}