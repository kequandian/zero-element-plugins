function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import TheTitle from "../TheTitle";
import TypeText from "../../presenter/TypeText";
import { AutoComponent } from 'zero-element-boot/lib/components';
export default function HeadText(props) {
  const allComponents = {
    TheTitle,
    TypeText
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
        presenter: "TheTitle",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              number: "number",
              topic: "topic"
            }
          }
        }
      }, {
        presenter: "TypeText",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              typetext: "typetext"
            }
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