import React from 'react';
import CompoundComponents from "../CompoundComponents";
import { AutoLayout } from 'zero-element-boot';
export default function ContentText(props) {
  const {
    content
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
            text: "text"
          }
        }
      },
      // cart:{
      // xname:"Cart",
      // indicator:"SelectIndicatorCart",
      //     props:{
      //         padding:0,
      //         margin:"10px"
      //     }
      // },
      container: "PlainList"
    },
    items: content
  };
  return /*#__PURE__*/React.createElement(AutoLayout, config, /*#__PURE__*/React.createElement(CompoundComponents, null));
}