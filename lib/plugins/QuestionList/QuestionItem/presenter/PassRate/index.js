import React from 'react';

require("./index.less");

export default function PassRate(props) {
  const {
    passRate
  } = props;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "PassRate"
  }, "\u901A\u8FC7\u7387 "), /*#__PURE__*/React.createElement("div", {
    className: "PassRateNum"
  }, passRate));
}