import React from 'react';

require("./index.less");

export default function Content(props) {
  const {
    content,
    isSelected
  } = props;
  let color = "#2f4f4f";

  if (isSelected) {
    color = "#1496BB";
  } else {
    color = '#2f4f4f';
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "Content",
    style: {
      color: `${color}`
    }
  }, content));
}