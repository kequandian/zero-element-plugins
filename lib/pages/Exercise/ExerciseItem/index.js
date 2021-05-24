function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import ImageAnimation from "./presenter/ImageAnimation";
import ContentText from "./presenter/ContentText";
import ItemTitle from "./presenter/ItemTitle";
import { AutoComponent } from 'zero-element-boot/lib/components';
export default function ExerciseItem(props) {
  const allComponents = {
    ImageAnimation,
    ContentText,
    ItemTitle
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
        presenter: "ImageAnimation",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              url: "url"
            }
          }
        }
      }, {
        presenter: "ContentText",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              logo: "logo",
              appname: "appname"
            }
          }
        }
      }, {
        presenter: "ItemTitle",
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