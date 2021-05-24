import React from 'react';

require("./index.less");

export default function Topic(props) {
  const {
    topic
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "Topic"
  }, topic);
}