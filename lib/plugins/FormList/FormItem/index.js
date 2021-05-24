function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Content from "./Content";
import { AutoComponent } from 'zero-element-boot/lib/components';
import Account from "./Account";

require("./index.less");

export default function FormItem(props) {
  const allComponents = {
    Content,
    Account
  };
  const config = {
    layout: {
      xname: "Flexbox",
      props: {
        align: "start",
        direction: "row"
      },
      children: [{
        presenter: "Content",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              title: "content"
            }
          }
        }
      }, {
        presenter: "Account",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              account: "account"
            }
          }
        }
      }]
    },
    ...props
  };
  return /*#__PURE__*/React.createElement(AutoComponent, _extends({}, config, {
    allComponents: allComponents
  }));
}