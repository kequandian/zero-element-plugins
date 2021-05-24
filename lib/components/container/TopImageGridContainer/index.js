import React from 'react';
import Seperator from "../../../plugins/testUserSelection/presenter/Seperator";
import Cart from 'zero-element-boot/lib/components/cart/Cart';
import Container from "zero-element-boot/lib/components/container/Container";
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';
import LargeImage from "../../presenter/item/LargeImage";
import ItemCart from "../../cart/ItemCart";

require("./index.less");
/**
 * 
 * @param {string} imgUrl 图片路劲
 * @returns 
 */


export default function TopImageGridContainer(props) {
  const {
    children,
    imgUrl,
    showLayoutBorder = false,
    bg = '#E5E5E5',
    widthSize = '320px'
  } = props;
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement("div", {
      className: showLayoutBorder ? "TopImageGridContainer" : "",
      style: {
        backgroundColor: `${bg}`,
        width: `${widthSize}`
      }
    }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Flexbox, {
      align: "start"
    }, /*#__PURE__*/React.createElement(LargeImage, {
      url: imgUrl
    }))), /*#__PURE__*/React.createElement(ItemCart, {
      padding: "0"
    }, child));
  });
}