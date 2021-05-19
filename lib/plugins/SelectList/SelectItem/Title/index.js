import React from 'react';

require("./index.less");

export default function Title(props) {
  const {
    title
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "Title"
  }, title);
}