require("./index.less");

import React from 'react';
import NamedLayout from 'zero-element-boot/lib/components/NamedLayout';
export default function Select(props) {
  const {
    text
  } = props;
  return /*#__PURE__*/React.createElement(NamedLayout, {
    xname: text
  }, /*#__PURE__*/React.createElement("div", {
    className: "select"
  }, text));
}