function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { AutoComponent } from 'zero-element-boot';
import Title from "../../Title";
import ContentTexts from "../ContentTexts";
export default function LayoutItem(props) {
  const allComponents = {
    Title,
    ContentTexts
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
        presenter: "Title",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              title: "title"
            }
          }
        }
      }, {
        presenter: "ContentTexts",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              layoutText: "layoutText"
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