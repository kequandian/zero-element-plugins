import React from 'react';
import { AutoLayout } from 'zero-element-boot/lib/components';
import CompoundItem from "./CompoundItem";

require("./index.less");

export default function CompoundList(props) {
  const {
    list
  } = props; // const commit=[
  //         {
  //             title:"复合组件",
  //                 content:[
  //                     {
  //                         text:"Corner"
  //                     },
  //                     {
  //                         text:"HoverShadowCart"
  //                     },
  //                     {
  //                         text:"SelectedCart"
  //                     }
  //                 ]
  //         }
  //     ]

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
            content: "content"
          }
        }
      },
      cart: {
        xname: "SelectedCart",
        props: {}
      },
      container: "PlainList"
    },
    items: list
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "CompoundList"
  }, /*#__PURE__*/React.createElement(AutoLayout, config, /*#__PURE__*/React.createElement(CompoundItem, null)));
}