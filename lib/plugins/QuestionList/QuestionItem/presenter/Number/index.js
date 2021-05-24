import React from 'react';

require("./index.less");

export default function Number(props) {
  const {
    number
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "Number"
  }, number);
}