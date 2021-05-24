function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import FootText from "../FootText";
import { AutoComponent } from 'zero-element-boot/lib/components';
import TodoTest from "../../presenter/TodoTest";
export default function FootContent(props) {
  const allComponents = {
    FootText,
    TodoTest
  };
  const config = {
    layout: {
      xname: "Flexbox",
      props: {
        align: "between",
        direction: "row",
        justify: "between row"
      },
      children: [{
        presenter: "FootText",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              account: "account",
              passRate: "passRate",
              diffect: "diffect",
              colors: "colors"
            }
          }
        }
      }, {
        presenter: "TodoTest",
        gateway: {
          xname: "Binding",
          props: {
            binding: {}
          }
        }
      }]
    },
    ...props
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "480px"
    }
  }, /*#__PURE__*/React.createElement(AutoComponent, _extends({}, config, {
    allComponents: allComponents
  })));
}