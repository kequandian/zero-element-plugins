function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import ItemIconAction from "../../../../presenter/item/ItemIconAction";
import ContentText from "../ContentText";
import { AutoComponent } from 'zero-element-boot';
export default function Content(props) {
  const allComponents = {
    ItemIconAction
  };
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: "start"
      },
      children: [{
        presenter: "ItemIconAction",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              update_time: "update_time"
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