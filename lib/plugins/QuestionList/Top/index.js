import React from 'react';
import QuestionList from "./..";

require("./index.less");

export default function Top(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "Top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "TopLeft"
  }), /*#__PURE__*/React.createElement("div", {
    className: "TopRight"
  }, "\u7EC3\u4E00\u7EC3"), /*#__PURE__*/React.createElement(QuestionList, null));
}