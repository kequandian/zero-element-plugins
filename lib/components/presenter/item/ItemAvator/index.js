import React from 'react';

require("./index.less");
/**
 * @param {string} logo 图标
 * @returns
 */


export default function ItemAvator({
  url
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "HeadPortrait"
  }, /*#__PURE__*/React.createElement("img", {
    src: url
  }));
}