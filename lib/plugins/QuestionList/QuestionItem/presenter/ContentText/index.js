import React from 'react';

require("./index.less");

export default function ContentText(props) {
  const {
    content
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "ContentText"
  }, content);
}