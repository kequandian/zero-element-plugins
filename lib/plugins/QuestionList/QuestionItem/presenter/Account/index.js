import React from 'react';

require("./index.less");

export default function Account(props) {
  const {
    account
  } = props;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "Account"
  }, "\u89E3\u9898 "), /*#__PURE__*/React.createElement("div", {
    className: "AccountNum"
  }, account, " "));
}