function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import layout from "./layout";
import { AutoLayout } from 'zero-element-boot/lib/components';
import LogoSubtitleItem from "../../item/LogoSubtitleItem";
/**
 * @param {Event} onListItemClick 子项点击事件
 * @param {string} logo 图标
 * @param {string} title 标题
 * @param {string} subtitle 副标题
 * @param {string} timestamp 时间戳
 * @returns
 */

export default function LogoSubtitleList(props) {
  const {
    onhandleClick,
    onItemClickHandle,
    onListItemClick,
    ...data
  } = props; // const onClick = (item) => {
  //     // console.log('TodoList:onClick:item data=', item)
  //     if(onItemClickHandle){
  //        onItemClickHandle(item);  
  //     }  
  // }

  const config = {
    items: data.items,
    layout
  };
  return /*#__PURE__*/React.createElement(AutoLayout, _extends({}, config, {
    onItemClick: onListItemClick
  }), /*#__PURE__*/React.createElement(LogoSubtitleItem, null));
}