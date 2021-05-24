import React from 'react';
import { PageGridContainer } from "../../../../components/container";
import { AutoComponent } from 'zero-element-boot/lib/components';
import Flexbox from 'zero-element-boot/lib/components/layout/Flexbox';
import PlainList from 'zero-element-boot/lib/components/list/PlainList';
import SelectionList from 'zero-element-boot/lib/components/list/SelectionList';
import Cart from 'zero-element-boot/lib/components/cart/Cart';
import HightlightCart from 'zero-element-boot/lib/components/cart/HightlightCart';
import SelectedCartOutSideIcon from "../../../../components/cart/SelectedCartOutSideIcon";
import DesignCarItem from "../../../../components/item/DesignCarItem/Sandbox";
const items = [{
  title: "Content",
  subtitle: "Subtitle",
  timestamp: "昨天",
  url: "https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav"
}, {
  title: "Content",
  subtitle: "Subtitle",
  timestamp: "昨天",
  url: "https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav"
}, {
  title: "Content",
  subtitle: "Subtitle",
  timestamp: "昨天",
  url: "https://s.cn.bing.net/th?id=ODL.8acd6796e431785e9623a48ef791095b&w=146&h=146&c=7&rs=1&qlt=80&pid=RichNav"
}];
export default function Index(props) {
  const config = {
    layout: {
      xname: 'Flexbox',
      props: {
        align: 'column'
      },
      cart: {
        xname: 'Cart',
        props: {
          linewidth: '0px',
          padding: '10px',
          margin: '10px 10px'
        }
      }
    }
  };
  const plainConfig = {
    items: items
  };
  const selectionConfig = {
    items: items
  };
  const SelectCartOutSideIconBodyConfig = {
    title: "Content"
  };
  return /*#__PURE__*/React.createElement(PageGridContainer, {
    title: "列表",
    bg: "#ffffff",
    showLayoutBorder: true
  }, /*#__PURE__*/React.createElement(AutoComponent, config, /*#__PURE__*/React.createElement(PageGridContainer, {
    title: "PlainList",
    bg: "#ffffff",
    showLayoutBorder: true
  }, /*#__PURE__*/React.createElement(PlainList, plainConfig, /*#__PURE__*/React.createElement(Flexbox, {
    align: "start",
    direction: "column"
  }, /*#__PURE__*/React.createElement(HightlightCart, {
    fill: "#F3F3F3"
  }, /*#__PURE__*/React.createElement(DesignCarItem, null))))), /*#__PURE__*/React.createElement(PageGridContainer, {
    title: "SelectedList",
    bg: "#ffffff",
    showLayoutBorder: true
  }, /*#__PURE__*/React.createElement(SelectionList, selectionConfig, /*#__PURE__*/React.createElement(SelectedCartOutSideIcon, {
    fill: 'transparent',
    padding: "0px",
    selectedStroke: "#2196F3",
    lineWidth: "1px"
  }, /*#__PURE__*/React.createElement(Flexbox, {
    align: "start",
    direction: "column"
  }, /*#__PURE__*/React.createElement(HightlightCart, {
    margin: "0px"
  }, /*#__PURE__*/React.createElement(DesignCarItem, null))))))));
}