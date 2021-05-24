import React from 'react';
import { AutoLayout } from 'zero-element-boot/lib/components';

require("./index.less");

import CartItem from "./CartItem";
import { PageGridContainer } from "../../../../components/container";
export default function CartList(props) {
  const {
    selectionOne
  } = props;
  const config = {
    layout: {
      xname: "Flexbox",
      props: {
        align: "start",
        direction: "column"
      },
      gateway: {
        xname: "Binding",
        props: {
          binding: {
            title: "title",
            cartText: "cartText"
          }
        }
      },
      cart: {
        xname: "SelectedCart",
        props: {}
      },
      container: "PlainList"
    },
    items: selectionOne
  };
  return /*#__PURE__*/React.createElement(PageGridContainer, {
    bg: "#ffffff",
    showLayoutBorder: true
  }, /*#__PURE__*/React.createElement(AutoLayout, config, /*#__PURE__*/React.createElement(CartItem, null)));
}