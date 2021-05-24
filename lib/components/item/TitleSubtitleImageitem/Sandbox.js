import React from 'react';
import TitleSubtitleImageitem from "./";
export default function Sandbox(props) {
  const {
    width = '300px'
  } = props;
  const config = {
    title: "Title",
    subtitle: "Subtitle",
    url: "https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${width}`
    }
  }, /*#__PURE__*/React.createElement(TitleSubtitleImageitem, config));
}