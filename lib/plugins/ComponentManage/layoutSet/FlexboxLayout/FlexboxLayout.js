import React from 'react';
import { AutoLayout } from 'zero-element-boot/lib/components';
import FormItem from "../../../FormList/FormItem";

require("./index.less");

export default function FlexboxLayout(props) {
  const data = [{
    title: "子项01",
    account: "3"
  }, {
    title: "子项02",
    account: "2"
  }, {
    title: "子项03",
    account: "1"
  }];
  const config = {
    layout: {
      xname: "Flexbox",
      props: {
        align: "row"
      },
      gateway: {
        xname: "Binding",
        props: {
          binding: {
            title: "title",
            account: "account"
          }
        }
      },
      cart: {
        xname: "Cart",
        props: {
          props: {
            linewidth: '0',
            padding: '0px',
            margin: '10px 10px',
            shadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
          }
        }
      },
      container: "PlainList"
    },
    items: data
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "plainList"
  }, /*#__PURE__*/React.createElement(AutoLayout, config, /*#__PURE__*/React.createElement(FormItem, null)));
}