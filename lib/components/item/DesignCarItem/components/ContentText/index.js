function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

require("./index.less");

import { AutoComponent } from 'zero-element-boot/lib/components';
import ItemTitle from "../../../../presenter/item/ItemTitle";
import ItemSubtitle from "../../../../presenter/item/ItemSubtitle"; // const presenter =require('@/plugins/GenericListItem/LogoSubtitleItem/presenter/ContentText')
// import layout from '@/plugins/TodoList/designLayout';

/**
 * @param {string} title 标题
 * @param {string} subtitle 副标题
 * @returns
 */

export default function ContentText(props) {
  const allComponents = {
    ItemTitle
  };
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: "align-content-center"
      },
      children: [{
        presenter: "ItemTitle",
        gateway: {
          xname: "Binding",
          props: {
            binding: {
              title: "content"
            }
          }
        }
      }]
    },
    ...props
  };
  return (
    /*#__PURE__*/
    // <div className="Content_text">
    React.createElement(AutoComponent, _extends({}, config, {
      allComponents: allComponents,
      setClick: false
    })) // </div>

  );
}