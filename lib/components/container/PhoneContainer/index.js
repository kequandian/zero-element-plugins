import React from 'react';
import Seperator from "../../../plugins/testUserSelection/presenter/Seperator";
import Cart from 'zero-element-boot/lib/components/cart/Cart';
import Container from "zero-element-boot/lib/components/container/Container";
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';
import ItemCart from "../../cart/ItemCart";

require("./index.less");
/**
 * 
 * @param {string} widthSize 宽度
 * @returns 
 */


export default function PhoneGridContainer(props) {
  const {
    children,
    bg = "#ffffff"
  } = props;
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement("div", {
      className: "PhoneGridContainer",
      style: {
        background: `${bg}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "header"
    }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Flexbox, {
      align: "start",
      direction: "between"
    }, /*#__PURE__*/React.createElement("div", null, "15:35"), /*#__PURE__*/React.createElement("div", {
      className: "headerCenter"
    }), /*#__PURE__*/React.createElement("div", null, "4G")))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(ItemCart, {
      padding: "0"
    }, child)), /*#__PURE__*/React.createElement(Seperator, null));
  });
}