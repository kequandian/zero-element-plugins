import React from 'react';
import Container from "zero-element-boot/lib/components/container/Container";
import { PageGridContainer } from "../../../components/container";
import { AutoComponent } from 'zero-element-boot/lib/components'; //boot

import Cart from 'zero-element-boot/lib/components/cart/Cart';
import Circle from 'zero-element-boot/lib/components/cart/Circle';
import Corner from 'zero-element-boot/lib/components/cart/Corner';
import ItemCart from 'zero-element-boot/lib/components/cart/ItemCart';
import Rectangle from 'zero-element-boot/lib/components/cart/Rectangle';
export default function Index(props) {
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'start',
        direction: 'column',
        justify: "start"
      },
      cart: {
        xname: 'Cart',
        props: {
          linewidth: '0',
          padding: '0px',
          margin: '10px 10px',
          shadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
        }
      }
    }
  };
  return /*#__PURE__*/React.createElement(PageGridContainer, {
    title: "Cart",
    bg: "#ffffff",
    showLayoutBorder: true
  }, /*#__PURE__*/React.createElement(AutoComponent, config, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '300px'
    }
  }, /*#__PURE__*/React.createElement(Cart, {
    margin: "0",
    padding: "16px"
  }, /*#__PURE__*/React.createElement("div", null, "Cart"))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '70px'
    }
  }, /*#__PURE__*/React.createElement(Circle, {
    margin: "0",
    padding: "16px",
    corner: "35px",
    fill: "#fff",
    lineWidth: "1",
    stroke: "#d0cdcd"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '70px',
      height: '64px',
      lineHeight: '64px',
      marginLeft: '10px'
    }
  }, "Circle"))), /*#__PURE__*/React.createElement(Corner, {
    margin: "0",
    padding: "16px",
    corner: "8px",
    fill: "#fff",
    lineWidth: "1",
    stroke: "#d0cdcd"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '50px',
      lineHeight: '50px',
      marginLeft: '10px'
    }
  }, "Corner")), /*#__PURE__*/React.createElement(ItemCart, {
    padding: "5px",
    margin: "5px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '50px',
      lineHeight: '50px'
    }
  }, "ItemCart")), /*#__PURE__*/React.createElement(Rectangle, {
    stroke: "#d0cdcd"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '50px',
      lineHeight: '50px',
      paddingLeft: '10px',
      background: '#E4F1F5'
    }
  }, "Rectangle"))));
}