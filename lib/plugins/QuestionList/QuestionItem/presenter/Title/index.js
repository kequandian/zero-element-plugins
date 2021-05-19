import React from 'react';

require("./index.less");

export default function Title(props) {
  const {
    title,
    color
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "title",
    style: {
      background: `${color}`
    }
  }, title);
}