import React, { useState } from 'react'; // import { Tooltip} from 'antd';

const check = require("./images/check.png");

const overcheck = require("./images/overcheck.png");

require("./index.less");
/**
 * @param {string} timestamp 时间戳
 * @returns
 */


export default function ItemIconAction(props) {
  const text = /*#__PURE__*/React.createElement("span", null, "\u5B8C\u6210");
  const {
    update_time
  } = props;
  const [onClick, setOnClick] = useState(false);
  const [display, setDisplay] = useState(null);
  const [onHover, setOnHover] = useState(false);
  const [theImageUrl, setTheImageUrl] = useState(check);

  const toggleHover = () => {
    const result = !onHover;
    setTheImageUrl(result ? overcheck : check);
    setOnHover(result);
  };

  const toggleOnclick = () => {
    const result = !onClick;
    setDisplay(result ? "none" : null);
    setOnClick(result); // console.log("11111"+result+display)
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "TheFinish"
  }, /*#__PURE__*/React.createElement("div", {
    className: "TheTime"
  }, update_time));
}