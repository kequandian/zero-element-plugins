import React from 'react';

require("./index.less");

export default function FormFieldTitle({
  content,
  corner
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "FormFieldTitle",
    style: {
      borderRadius: `${corner}`
    }
  }, content);
}