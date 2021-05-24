import React from 'react';
import Seperator from "../../../plugins/testUserSelection/presenter/Seperator";
import FormContainerTitle from "../../presenter/item/FormContainerTitle";
import FormFieldTitle from "../../presenter/item/FormFieldTitle";
import Cart from 'zero-element-boot/lib/components/cart/Cart';
import Container from "zero-element-boot/lib/components/container/Container";
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';
import ItemCart from "../../cart/ItemCart";

require("./index.less");
/**
 * 
 * @param {string} title
 * @returns 
 */
// const Seperator=require('@/plugins/testUserSelection/presenter/Seperator')


export default function PageGridContainer(props) {
  const {
    children,
    title,
    subtitle,
    corner,
    showLayoutBorder = false,
    bg = '#E5E5E5'
  } = props;
  return React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement("div", {
      className: showLayoutBorder ? "PageGridContainer" : "",
      style: {
        backgroundColor: `${bg}`,
        marginBottom: '10px',
        padding: '0px 10px 10px 10px'
      }
    }, title ? /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Flexbox, {
      align: "start",
      direction: "row",
      justify: "space-between"
    }, /*#__PURE__*/React.createElement(FormContainerTitle, {
      content: title
    }))) : null, /*#__PURE__*/React.createElement(Seperator, {
      lineType: "solid"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: '5px'
      }
    }), /*#__PURE__*/React.createElement(ItemCart, {
      padding: "0"
    }, child));
  });
}