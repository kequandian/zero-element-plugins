function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import ItemImage from "../../../../presenter/item/ItemImage";
import ContentText from "../ContentText";
import { AutoComponent } from 'zero-element-boot';
export default function Content(props) {
  const allComponents = {
    ItemImage,
    ContentText
  };
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: "start"
      },
      children: [{
        presenter: 'ItemImage',
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              logo: 'url'
            }
          }
        }
      }, {
        presenter: "ContentText",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              title: "title"
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