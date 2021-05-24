import React, { useState } from 'react';
import { Tabs } from 'antd';
import NewsList from "./..";
import display from "../../../components/presenter/item/ItemIconAction";

require("./index.less");

const {
  TabPane
} = Tabs;
export default function callback(key) {
  const onhandleClick = data => {// console.log('data = ',data);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "TheLabel"
  }, /*#__PURE__*/React.createElement(Tabs, {
    defaultActiveKey: "1",
    onChange: callback
  }, /*#__PURE__*/React.createElement(TabPane, {
    tab: "\u82B1\u8BAF",
    key: "1",
    tabBarStyle: {
      margin: "auto"
    }
  }, /*#__PURE__*/React.createElement(NewsList, {
    onhandleClick: onhandleClick,
    display: `${display}`
  })), /*#__PURE__*/React.createElement(TabPane, {
    tab: "\u516C\u544A",
    key: "2",
    tabBarStyle: {
      paddingLeft: "100px"
    }
  }, /*#__PURE__*/React.createElement(NewsList, null)), /*#__PURE__*/React.createElement(TabPane, {
    tab: "\u5B9D\u7B75\u8BBE\u620F",
    key: "3",
    tabBarStyle: {
      paddingLeft: "100px"
    }
  }, /*#__PURE__*/React.createElement(NewsList, null))));
}