function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Number from "../../presenter/Number";
import Topic from "../../presenter/Topic";
import { AutoComponent } from 'zero-element-boot/lib/components';
export default function TheTitle(props) {
  const allComponents = {
    Number,
    Topic
  };
  const config = {
    layout: {
      xname: "Flexbox",
      props: {
        align: "start",
        direction: "row",
        justify: "start"
      },
      children: [{
        presenter: "Number",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              number: "number"
            }
          }
        }
      }, {
        presenter: "Topic",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              topic: "topic"
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