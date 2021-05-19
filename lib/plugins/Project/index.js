import React from 'react';
import { AutoLayout } from 'zero-element-boot/lib/components';
import ProjectItem from "./ProjectItem";
export default function Project(props) {
  const commit = [{
    form: [{
      title: "头像组件",
      account: "3"
    }, {
      title: "标题组件",
      account: ""
    }, {
      title: "副标题组件",
      account: "1"
    }],
    selectionOne: [{
      title: "Cart",
      cartText: [{
        text: "Corner"
      }, {
        text: "HoverShadowCart"
      }, {
        text: "SelectCart"
      }]
    }],
    selectionTwo: [{
      title: "Layout",
      layoutText: [{
        text: "Flexbox"
      }, {
        text: "Itembox"
      }, {
        text: "SelectBox"
      }]
    }],
    demo: "123",
    list: [{
      title: "复合组件",
      content: [{
        text: "Compound"
      }]
    }]
  }];
  const config = {
    layout: {
      xname: "Itembox",
      props: {
        align: "start",
        direction: "row"
      },
      gateway: {
        xname: "Binding",
        props: {
          binding: {
            form: "form",
            selectionOne: "selectionOne",
            selectionTwo: "selectionTwo",
            demo: "demo",
            list: "list"
          }
        }
      },
      cart: {
        xname: "ItemCart",
        props: {
          padding: 0
        }
      },
      container: "PlainList"
    },
    items: commit
  };
  return /*#__PURE__*/React.createElement(AutoLayout, config, /*#__PURE__*/React.createElement(ProjectItem, null));
}