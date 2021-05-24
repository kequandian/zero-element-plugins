function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Title from "./presenter/Title";
import SelectList from "./presenter/SelectList";
import { AutoComponent } from 'zero-element-boot';
export default function ComponentsItem(props) {
  const allComponents = {
    Title,
    SelectList
  };
  const config = {
    layout: {
      xname: "Flexbox",
      props: {
        align: "start",
        direction: "column"
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
        presenter: "SelectList",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              text: "text"
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