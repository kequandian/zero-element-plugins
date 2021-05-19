import React from 'react';

require("./index.less");

export default function Index({
  content
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "text_content"
  }, content);
}