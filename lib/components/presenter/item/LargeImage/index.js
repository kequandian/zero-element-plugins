import React from 'react';

require("./index.less");
/**
 * @param {string} url 图片路劲
 * @returns
 */


export default function ItemAvator({
  url
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "largeImage"
  }, /*#__PURE__*/React.createElement("img", {
    src: url
  }));
}