function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import ItemLogo from "../ItemLogo";
import AppName from "../AppName";
import { AutoComponent } from 'zero-element-boot/lib/components';
export default function ContentText(props) {
  const allComponents = {
    ItemLogo,
    AppName
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
        presenter: "ItemLogo",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              logo: "logo"
            }
          }
        }
      }, {
        presenter: "AppName",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              appname: "appname"
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