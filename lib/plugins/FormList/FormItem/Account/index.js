import React from 'react';

require("./index.less");

export default function Account(props) {
  const {
    account
  } = props;
  const bgColor = account ? "#869eab" : "transparent";
  return /*#__PURE__*/React.createElement("div", {
    className: "Account",
    style: {
      background: `${bgColor}`
    }
  }, account);
}