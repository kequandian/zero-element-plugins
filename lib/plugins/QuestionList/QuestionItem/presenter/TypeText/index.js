import React from 'react';

require("./index.less");

export default function TypeText(props) {
  const {
    typetext
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "TypeText"
  }, typetext);
}