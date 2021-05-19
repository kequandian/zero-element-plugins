import React from 'react';
import { PageGridContainer } from "../../../../components/container";
import { AutoComponent } from 'zero-element-boot/lib/components';
import HoverShadowCart from "../../../../components/cart/static/ShadowCart/HoverShadowCart";
import FloatingCartWhite from "../../../../components/cart/static/ShadowCart/FloatingCartWhite";
import HoverCartLightWhite from "../../../../components/cart/static/ShadowCart/HoverCartWhite";
import DropdownsCartWhite from "../../../../components/cart/static/ShadowCart/DropdownsCartWhite";
export default function Index(props) {
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'start',
        direction: 'column',
        justify: "start",
        margin: '0 10px'
      },
      cart: {
        xname: 'Cart',
        props: {
          linewidth: '0',
          padding: '0',
          margin: '10px 10px',
          shadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
        }
      }
    }
  };

  const BodyContent = ({
    text
  }) => {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '50px',
        lineHeight: '50px',
        marginLeft: '10px'
      }
    }, text);
  };

  return /*#__PURE__*/React.createElement(PageGridContainer, {
    title: "ShadowCart",
    bg: "#ffffff",
    showLayoutBorder: true
  }, /*#__PURE__*/React.createElement(AutoComponent, config, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "300px"
    }
  }, /*#__PURE__*/React.createElement(HoverShadowCart, {
    margin: "0"
  }, /*#__PURE__*/React.createElement(BodyContent, {
    text: "HoverShadowCart"
  }))), /*#__PURE__*/React.createElement(FloatingCartWhite, {
    margin: "0"
  }, /*#__PURE__*/React.createElement(BodyContent, {
    text: "FloatingCartWhite"
  })), /*#__PURE__*/React.createElement(HoverCartLightWhite, {
    margin: "0"
  }, /*#__PURE__*/React.createElement(BodyContent, {
    text: "HoverCartLightWhite"
  })), /*#__PURE__*/React.createElement(DropdownsCartWhite, {
    margin: "0"
  }, /*#__PURE__*/React.createElement(BodyContent, {
    text: "DropdownsCartWhite"
  }))));
}