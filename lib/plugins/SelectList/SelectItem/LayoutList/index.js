import React from 'react';
import { AutoLayout } from 'zero-element-boot/lib/components';

require("./index.less");

import LayoutItem from "./LayoutItem";
import { PageGridContainer } from "../../../../components/container";
export default function LayoutList(props) {
  const {
    selectionTwo
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
            layoutText: "layoutText"
          }
        }
      },
      cart: {
        xname: "ItemCart",
        props: {}
      },
      container: "PlainList"
    },
    items: selectionTwo
  };
  return /*#__PURE__*/React.createElement(PageGridContainer, {
    bg: "#ffffff",
    showLayoutBorder: true
  }, /*#__PURE__*/React.createElement(AutoLayout, config, /*#__PURE__*/React.createElement(LayoutItem, null)));
}