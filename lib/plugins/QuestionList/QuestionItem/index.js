function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Title from "./presenter/Title";
import HeadText from "./components/HeadText";
import ContentText from "./presenter/ContentText";
import FootContent from "./components/FootContent";
import { AutoComponent } from 'zero-element-boot/lib/components';
import Cart from 'zero-element-boot/lib/components/cart/Cart';

require("./index.less");

export default function QuestionItem(props) {
  const {
    color
  } = props;
  const allComponents = {
    Title,
    HeadText,
    ContentText,
    FootContent
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
              title: "title",
              color: "color"
            }
          }
        }
      }, {
        presenter: "HeadText",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              number: "number",
              topic: "topic",
              typetext: "typetext"
            }
          }
        }
      }, {
        presenter: "ContentText",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              content: "content"
            }
          }
        }
      }, {
        presenter: "FootContent",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              account: "account",
              passRate: "passRate",
              diffect: "diffect",
              colors: "colors"
            }
          }
        }
      }]
    },
    ...props
  };
  return /*#__PURE__*/React.createElement(Cart, {
    corner: "10px",
    linewidth: "3px 0px 0px 0px",
    lineColor: color,
    shadow: "0 0 8px #ccc"
  }, /*#__PURE__*/React.createElement(AutoComponent, _extends({}, config, {
    allComponents: allComponents
  })));
}