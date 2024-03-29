function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { history } from 'umi';
import { AutoLayout } from 'zero-element-boot/lib/components';
import FormItem from "./FormItem";

require("./index.less");

export default function FormList(props) {
  const {
    form
  } = props;
  const config = {
    layout: {
      xname: "Flexbox",
      props: {
        align: "between",
        direction: "column"
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
        xname: "ItemCart",
        indicator: "SelectIndicatorCartab",
        props: {
          padding: "16px",
          lineColor: "#1496BB",
          activeLeftLine: "5px",
          margin: '0px',
          stroke: ''
        }
      },
      container: "SelectionList"
    },
    items: form
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "FormList"
  }, /*#__PURE__*/React.createElement(AutoLayout, _extends({}, config, {
    onItemClick: event => history.push(event.src)
  }), /*#__PURE__*/React.createElement(FormItem, null)));
}