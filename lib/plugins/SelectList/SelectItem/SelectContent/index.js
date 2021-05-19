function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { AutoComponent } from 'zero-element-boot';
import CartList from "../CartList";
import LayoutList from "../LayoutList";
export default function SelectContent(props) {
  const allComponents = {
    CartList,
    LayoutList
  };
  const config = {
    layout: {
      xname: "Flexbox",
      props: {
        align: "start",
        direction: "column",
        justify: "start"
      },
      children: [{
        presenter: "CartList",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              selectionOne: "selectionOne"
            }
          }
        }
      }, {
        presenter: "LayoutList",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              selectionTwo: "selectionTwo"
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