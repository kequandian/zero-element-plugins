function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import FormList from "../../FormList";
import SelectContent from "../../SelectList/SelectItem/SelectContent";
import Demonstration from "../../Demonstration";
import CompoundList from "../../SelectList/SelectItem/CompoundList";
import { AutoComponent } from 'zero-element-boot/lib/components';

require("./index.less");

export default function ProjectItem(props) {
  const allComponents = {
    FormList,
    SelectContent,
    Demonstration,
    CompoundList
  };
  const config = {
    layout: {
      xname: "Flexbox",
      props: {
        align: "start",
        direction: "row"
      },
      children: [{
        presenter: "FormList",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              form: "form"
            }
          }
        }
      }, {
        presenter: "SelectContent",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              selectionOne: "selectionOne",
              selectionTwo: "selectionTwo"
            }
          }
        }
      }, {
        presenter: "Demonstration",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              demo: "demo"
            }
          }
        }
      }, {
        presenter: "CompoundList",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              list: "list"
            }
          }
        }
      }]
    },
    ...props
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "ProjectItem"
  }, /*#__PURE__*/React.createElement(AutoComponent, _extends({}, config, {
    allComponents: allComponents
  })));
}