function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Title from "./Title";
import Subtitle from "./Subtitle";
import { AutoComponent } from 'zero-element-boot/lib/components';
export default function NewsItem(props) {
  const {
    data
  } = props;
  const allComponents = {
    Title,
    Subtitle
  };
  const config = {
    layout: {
      xname: "Flexbox",
      props: {
        align: "start",
        direction: "row"
      },
      children: [{
        presenter: "Title",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              title: "content"
            }
          }
        }
      }, {
        presenter: "Subtitle",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              subtitle: "content"
            }
          }
        }
      }]
    },
    items: data
  };
  return /*#__PURE__*/React.createElement(AutoComponent, _extends({}, config, {
    allComponents: allComponents
  }));
}