function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react'; // import layout from '@/plugins/TodoList/designLayout'

require("./index.less");

import { AutoComponent } from 'zero-element-boot/lib/components';
import layout from "./layout";

const presenter = require("./presenter"); // const CartSet = require('@/components/cart');

/**
 * @param {string} logo 图标
 * @param {string} title 标题
 * @param {string} subtitle 副标题
 * @param {string} timestamp 时间戳
 * @param onListItemClick 子项点击事件
 * @returns
 */


export default function TxtAndRightImgCartItem(props) {
  const allComponents = { ...presenter
  };
  const config = {
    layout,
    ...props
  };
  return (
    /*#__PURE__*/
    //<AutoComponent onItemClick={onToDoItemClick}  {...config} cartSet={CartSet} allComponents={allComponents}/>
    React.createElement(AutoComponent, _extends({}, config, {
      allComponents: allComponents
    }))
  );
}